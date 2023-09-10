const getPool = require('../../db/connectDB');
const generateError = require('../../helpers/generateError');

async function getUser (req, res, next) {
    try {
        const { userId } = req.params;
        const pool = await getPool();

        const [[user]] = await pool.query(`SELECT first_name, last_name, second_last_name, email, phone_number, avatar FROM users
        WHERE users.id = ?
        `, [userId]);
        if (!user) {
            return next(generateError(`El usuario con el id ${userId} no existe`, 404));
        }

        const userInfo = {
            ...user
        };

        const [[products]] = await pool.query(`SELECT name, description, product_image, category FROM products
            WHERE user_id = ?`, [userId]);

        let productsInfo;
        if (!products) {
            productsInfo = {};
        } else {
            productsInfo = {
                ...products
            };
        }

        res.status(200).send({
            status: 'ok',
            data: {
                userInfo,
                productsInfo
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getUser;
