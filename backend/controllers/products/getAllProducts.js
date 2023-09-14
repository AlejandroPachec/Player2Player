const getPool = require('../../db/connectDB');
const path = require('node:path');

async function getAllProducts (req, res, next) {
    try {
        const pool = await getPool();
        const [products] = await pool.query(`
        SELECT
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
        r.stars AS review_stars,
        GROUP_CONCAT(ph.name) AS product_photos 
    FROM
        products AS p
    JOIN
        users AS u ON p.user_id = u.id
    LEFT JOIN
        reviews AS r ON p.id = r.product_id
    LEFT JOIN
        product_photo AS ph ON p.id = ph.product_id
    GROUP BY
        p.id, p.name, p.description, p.price, p.category, p.user_id, u.first_name, u.last_name, r.title, r.text, r.stars
    `);

        const config = {
            imageUrlBase: path.join(__dirname, '../', process.env.UPLOADS_DIR)
        };

        const productsWithImages = products.map((product) => {
            const productPhotos = product.product_photos ? product.product_photos.split(',') : [];
            const productImageUrls = productPhotos.map((photoName) => `${config.imageUrlBase}${photoName.trim()}`);

            return {
                ...product,
                product_photos: productImageUrls
            };
        });

        res.status(200).json({
            status: 'Ok',
            message: 'Productos disponibles',
            data: productsWithImages
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getAllProducts;
