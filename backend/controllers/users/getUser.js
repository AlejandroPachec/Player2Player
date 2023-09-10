const getPool = require('../../db/connectDB');
const generateError = require('../../helpers/generateError');

async function getUser (req, res, next) {
    try {
        const { userId } = req.params;
        const pool = await getPool();

        const [[user]] = await pool.query(`SELECT * FROM users
        WHERE users.id = ?
        `, [userId]);
        if (!user) {
            return next(generateError(`El usuario con el id ${userId} no existe`, 404));
        }

        const { first_name, last_name, second_last_name, email, phone_number, avatar} = user;
        const userInfo = {
            user_id: userId,
            firstName: first_name,
            lastName: last_name,
            secondLastName: second_last_name,
            email,
            phone: phone_number,
            avatar
        };

        const [[products]] = await pool.query(`SELECT * FROM products
            WHERE user_id = ?`, [userId]);

        let productsInfo;
        if (!products) {
            productsInfo = {};
        } else {
            const { name, description, price, product_image, category } = products;
            productsInfo = {
                name,
                description,
                price,
                productImage: product_image,
                category
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
