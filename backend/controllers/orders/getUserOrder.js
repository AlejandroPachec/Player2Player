const getPool = require('../../db/connectDB');


async function getUserOrder (req, res, next) {
    const orderId = req.params.orderId;
    console.log(orderId);
    try {
        const pool = await getPool();

        const query = `
            SELECT *
            FROM orders
            WHERE  id =?;
        `;

        const [orders] = await pool.query(query, [orderId]);

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las órdenes' });
    }
}


module.exports = getUserOrder;
