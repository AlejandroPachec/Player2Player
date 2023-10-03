const generateError = require('../../helpers/generateError');
const getPool = require('../../db/connectDB');

async function getUserOrder (req, res, next) {
    try {
        const pool = await getPool();
        const userId = req.user.id;
        const orderId = req.params.idOrder;

        let query;
        let queryParams;

        if (orderId) {
            query = `
                SELECT O.*, P.name, P.description, P.price, P.state, P.created_at, PP.product_photo, U.first_name, U.last_name
                FROM orders O
                INNER JOIN products P ON O.product_id = P.id
                LEFT JOIN LATERAL (
                SELECT MAX(name) AS product_photo
                FROM product_photo
                WHERE product_id = O.product_id
                ) AS PP ON true
                INNER JOIN users U ON U.id = O.user_buyer_id
                WHERE O.id = ? AND O.user_buyer_id = ?;
            `;
            queryParams = [orderId, userId];
        } else {
            query = `
                SELECT O.*, P.name, P.description, P.price, P.state, PP.product_photo
                FROM orders O
                INNER JOIN products P ON O.product_id = P.id
                LEFT JOIN LATERAL (
                SELECT MAX(name) AS product_photo
                FROM product_photo
                WHERE product_id = O.product_id
                ) AS PP ON true
                WHERE user_buyer_id = ?;
            `;
            queryParams = [userId];
        }

        const [orders] = await pool.query(query, queryParams);

        if (orders.length === 0) {
            return next(generateError('No se ha encontrado ningún pedido', 400));
        }

        res.status(200).send({
            status: 'Ok',
            data: {
                orders
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getUserOrder;
