const getConnection = require('../../db/connectDB');
const emailVerification = require('../../helpers/emailVerification');
const Joi = require('joi');
const generateError = require('../../helpers/generateError');
const crypto = require('crypto');
const { PORT } = require('../../config');

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


        if (userBuyerId === userSellerId) {
            throw generateError('No puedes comprarte un producto a ti mismo', 403);
        }

        await pool.query(`INSERT INTO orders (id, user_buyer_id, user_seller_id, product_id)
        VALUES (?, ?, ?, ?)
        `, [id, userBuyerId, userSellerId, idProduct]);

        const [[{ email }]] = await pool.query(`
            SELECT email FROM users WHERE id = ?
        `, [userBuyerId]);

        const subject = 'Propuesta de compra';
        const html = `<p>Confirma tu venta en <a href="http://localhost:${PORT}/orders/confirm/${idProduct}}">este enlace</a></p>`;

        await emailVerification(email, subject, html);

        const [[reservedProduct]] = await pool.query(`
        SELECT p.name, p.description, p.category, p.state, p.price, o.id 
        FROM products p
        INNER JOIN orders o
        ON p.id = o.product_id
        WHERE p.id = ?
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
