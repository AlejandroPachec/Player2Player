const getPool = require('../../db/connectDB');

async function getAllProducts (req, res, next) {
    try {
        const pool = await getPool();
        const [products] = await pool.query(`SELECT
        p.id AS product_id,
        p.name AS product_name,
        p.description AS product_description,
        p.price AS product_price,
        p.category AS product_category,
        p.user_id AS seller_id,
        u.first_name AS seller_first_name,
        u.last_name AS seller_last_name,
        r.title AS review_title,
        r.text AS review_text,
        r.stars AS review_stars
    FROM
        products AS p
    JOIN
        users AS u ON p.user_id = u.id
    LEFT JOIN
        reviews AS r ON p.id = r.product_id;
    `);
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
