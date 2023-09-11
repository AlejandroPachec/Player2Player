const getPool = require('../../db/connectDB');

async function getProduct (req, res, next) {
    try {
        const pool = await getPool();
        const productId = req.params.idProduct;
        const products = await pool.query(
            'SELECT id, name, description, price, category, user_id FROM products WHERE id = ?',
            [productId]
        );
        if (products.length === 0) {
            res.status(404).send({
                status: 'Not Found',
                message: 'Producto no encontrado'
            });
        } else {
            res.status(200).send({
                status: 'Ok',
                message: 'Producto encontrado',
                data: {
                    ...products[0]
                }
            });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = getProduct;
