const getPool = require('../../db/connectDB');
const generateError = require('../../helpers/generateError');

async function getUser (req, res, next) {
    try {
        const { userId } = req.params;
        const pool = await getPool();

        const [[user]] = await pool.query(`SELECT first_name, last_name, bio, city, phone_number, avatar FROM users
        WHERE users.id = ?
        `, [userId]);
        if (!user) {
            return next(generateError(`El usuario con el id ${userId} no existe`, 404));
        }

        const [[reviews]] = await pool.query(`SELECT title, text, stars FROM reviews
        WHERE user_seller_id = ? `, [userId]);

        const [[products]] = await pool.query(`SELECT products.name, products.description, products.category, products.state, products.availability, product_photo.name AS photo
        FROM products
        INNER JOIN product_photo
        ON products.id = product_photo.product_id`);

        res.status(200).send({
            status: 'ok',
            data: {
                user,
                reviews,
                products: [products]
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getUser;
