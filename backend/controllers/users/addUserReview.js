const getPool = require('../../db/connectDB');
const addUserReviewSchema = require('../../schema/addUserReviewSchema');
const generateError = require('../../helpers/generateError');
const crypto = require('crypto');


async function addUserReview(req, res) {
  
   try {
    const order_id = req.params.orderId;
    const user_buyer_id = req.user.id;
    const pool = await getPool();
    
    const { title, text, stars } = req.body;

    
    const { error } = addUserReviewSchema.validate({ title, text, stars });
    
    if (error) {
      throw generateError(error.details[0].message, 400);
    };

    const orderData = await pool.query(
      'SELECT product_id, user_seller_id, exchange_time FROM orders WHERE id = ?',
      [order_id]
    );

    const orderInfo = orderData[0][0];
    const { product_id, user_seller_id, exchange_time } = orderInfo;

    if (!product_id) {
      throw generateError('No has comprado el producto', 400);
    }

    if (!user_seller_id) {
      throw generateError('No has comprado el producto al vendedor', 400);
    }

    if (new Date(exchange_time) > new Date()) {
      throw generateError('No puedes valorar hasta pasada la hora de la compra', 400);
    }

    const [existingReview] = await pool.query('SELECT * FROM reviews WHERE product_id = ?', [product_id]);

    console.error(existingReview.length)
    if (existingReview && existingReview.length > 0) {
      throw generateError('Ya has realizado una review para este producto', 400);
    }
  
    const id = crypto.randomUUID();

    await pool.query(
      'INSERT INTO reviews (id, title, text, stars, product_id, user_seller_id, user_buyer_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, title, text, stars, product_id, user_seller_id, user_buyer_id]
    );

    res.status(200).send({
      status: 'Ok',
      message: 'Review guardada correctamente',
      data: {
          id,
          title,
          text,
          stars,
          product_id,
          user_seller_id,
          user_buyer_id
      }
    });
  } catch (error) {
    console.error(error);

    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = addUserReview;
