const getPool = require('../../db/connectDB');

async function getAllProducts (req, res, next) {
    try {
        const pool = await getPool();
        const [products] = await pool.query(`SELECT id, name, description, price, category, user_id 
                                          FROM products `);
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

module.exports = getAllProducts;
