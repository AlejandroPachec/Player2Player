const getPool = require('../../db/connectDB');

async function getUserOrder (req, res, next) {
    try {
        const pool = await getPool();
        const userId = req.body.id;
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
            res.status(404).json({ message: 'Orden no encontrada' });
        } else {
            res.json(orders);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las órdenes' });
    }
}

module.exports = getUserOrder;
