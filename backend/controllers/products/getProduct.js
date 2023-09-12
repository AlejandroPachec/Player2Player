const getPool = require('../../db/connectDB');

async function getProduct (req, res, next) {
    try {
        const pool = await getPool();
        const productId = req.params.idProduct;
        const products = await pool.query(
            'SELECT id, name, description, price, product_image, category_id, user_id FROM products WHERE id = ? LIMIT 1',
            [productId]
        );

        if (products.length === 0) {
            res.status(404).send({
                status: 'Not Found',
                message: 'Producto no encontrado'
            });
        } else {
            const user = products[0].user_id;

            res.status(200).send({
                status: 'Ok',
                message: 'Producto encontrado',
                data: {
                    ...products[0],
                    user
                }
            });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = getProduct;
