const getPool = require('../../db/connectDB');
const generateError = require('../../helpers/generateError');

async function getUser (req, res, next) {
    try {
        const { userId } = req.params;
        const pool = await getPool();

        const [[user]] = await pool.query(`SELECT U.first_name, U.last_name, U.bio, U.city, U.postal_code, U.phone_number, U.avatar, userAvgReviews
        FROM users U
        INNER JOIN (SELECT user_seller_id, AVG(stars) AS userAvgReviews FROM reviews GROUP BY user_seller_id) AS avgReviews
        ON U.id = avgReviews.user_seller_id
        WHERE U.id = ?; `, [userId]);

        if (!user) {
            return next(generateError(`El usuario con el id ${userId} no existe`, 404));
        }

        const [[products]] = await pool.query(`SELECT P.name, P.description, P.category, P.state, P.price, PP.name AS photo
        FROM products P
        INNER JOIN users U ON P.user_id = U.id
        INNER JOIN product_photo PP ON PP.product_id = P.id
        WHERE U.id = ?;`, [userId]);


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
