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



        const [[products]] = await pool.query(`SELECT products.name, products.description, products.category, products.state, products.price, products.availability FROM 
        INNER JOIN product_photo
        ON products.id = product_photo.product_id
        WHERE products.user_id = ?`, [userId]);

        res.status(200).send({
            status: 'ok',
            data: {
                user,
                products: [products]
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getUser;
