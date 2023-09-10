const getPool = require('../../db/connectDB');

async function getProducts (req, res, next) {
    try {
        const pool = await getPool();

        const [products] = await pool.query(`SELECT id, name, description, price, product_image, category_id, user_id 
                                          FROM products`);

        res.status(200).send({
            status: 'Ok',
            message: 'Productos disponibles',
            data: {
                ...products
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getProducts;
