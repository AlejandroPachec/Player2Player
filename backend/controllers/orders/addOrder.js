const getConnection = require('../../db/connectDB');
/* const emailVerification = require('../../helpers/emailVerification'); */
const Joi = require('joi');
const generateError = require('../../helpers/generateError');
const crypto = require('crypto');

async function addOrder (req, res, next) {
    const userSellerIdSchema = Joi.string().uuid().required();

    let validateUserSellerId;

    try {
        validateUserSellerId = await userSellerIdSchema.validate(req.body);
    } catch (error) {
        return next(generateError('El id de usuario no es válido', 400));
    }

    try {
        const pool = await getConnection();

        const id = crypto.randomUUID();
        const userBuyerId = req.user.id;
        const { idProduct } = req.params;
        const { value: { userSellerId } } = validateUserSellerId;

        await pool.query(`
			INSERT INTO orders (id, user_buyer_id, user_seller_id, product_id)
			VALUES (?, ?, ?, ?)
		`, [id, userBuyerId, userSellerId, idProduct]);
        /*
        const [[{ email }]] = await pool.query(`
            SELECT email FROM users WHERE id = ?
        `, [userBuyerId]);

        const subject = 'Propuesta de compra';
        const html = `<p>Confirma tu venta en <a href="http://localhost:${process.env.PORT}/orders/user/confirmationOrder}">este enlace</a></p>`

        await emailVerification(email, subject, html);
        */

        const [[reservedProduct]] = await pool.query(`
			SELECT name, description, category, state, price FROM products WHERE id = ?
		`, [idProduct]);

        res.status(200).send({
            status: 'Ok',
            message: 'Producto reservado, pronto recibirás una respuesta del vendedor',
            data: {
                reservedProduct
            }
        });
    } catch (error) {
        next(error);
    }
};

module.exports = addOrder;
