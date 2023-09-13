const getPool = require('../../db/connectDB');
const path = require('node:path');
require('dotenv').config();

async function getProduct (req, res, next) {
    try {
        const pool = await getPool();
        const { idProduct } = req.params;

        const config = {
            imageUrlBase: path.join(__dirname, '../', process.env.UPLOADS_DIR)
        };

        const [productInfo] = await pool.query(
            `SELECT
                p.id AS product_id,
                p.name AS product_name,
                p.description AS product_description,
                p.price AS product_price,
                p.category AS product_category,
                p.user_id AS seller_id,
                u.first_name AS seller_first_name,
                u.last_name AS seller_last_name,
                ph.name AS product_photo,
                AVG(r.stars) AS avg_review_stars
            FROM
                products AS p
            JOIN
                users AS u ON p.user_id = u.id
            LEFT JOIN
                reviews AS r ON p.id = r.product_id
            LEFT JOIN
                product_photo AS ph ON p.id = ph.product_id
            WHERE
                p.id = ?
            GROUP BY
                p.id, p.user_id, ph.name
    `, [idProduct]);

        if (productInfo.length === 0) {
            res.status(404).send({
                status: 'Not Found',
                message: 'Producto no encontrado'
            });
        } else {
            const user = {
                id: productInfo[0].seller_id,
                first_name: productInfo[0].seller_first_name,
                last_name: productInfo[0].seller_last_name
            };

            const productImages = productInfo.map((product) => ({
                url: `${config.imageUrlBase}${product.product_photo}`
            }));

            const product = {
                id: productInfo[0].product_id,
                name: productInfo[0].product_name,
                description: productInfo[0].product_description,
                price: productInfo[0].product_price,
                category: productInfo[0].product_category,
                avg_review_stars: productInfo[0].avg_review_stars
            };

            res.status(200).send({
                status: 'Ok',
                message: 'Producto encontrado',
                data: {
                    product,
                    user,
                    productImages
                }
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({
            status: 'Error',
            message: 'Se ha producido un error al obtener el producto'
        });
    }
}

module.exports = getProduct;
