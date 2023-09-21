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
                SELECT *
                FROM orders
                WHERE id = ? AND user_buyer_id = ?;
            `;
            queryParams = [orderId, userId];
        } else {
            query = `
                SELECT *
                FROM orders
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
