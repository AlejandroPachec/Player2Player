const getPool = require('../../db/connectDB');

async function getAllUserOrder (req, res, next) {
    try {
        const pool = await getPool();
        const { idUser } = req.params;


        const [[ordersInfo]] = await pool.query(`
        SELECT 
        O.product_id,
        O.created_at,
        O.user_buyer_id,
        P.name AS product_name,
        P.description,
        P.price,
        U.first_name AS seller_first_name,
        U.last_name AS seller_last_name,
        U.avatar,
        U.city
        FROM 
        orders O
        INNER JOIN 
        products P 
        ON O.product_id = P.id
        INNER JOIN
        users U
        ON O.user_buyer_id = U.id
        WHERE 
        O.user_seller_id = ?;
        `, [idUser]);

        const [[rating]] = await pool.query(`
        SELECT AVG(stars) AS userAvgReviews FROM reviews
        WHERE user_buyer_id = ?
        GROUP BY user_buyer_id;        
        `, [ordersInfo.user_buyer_id]);

        res.status(200).send({
            status: 'Ok',
            data: {
                ordersInfo,
                rating
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getAllUserOrder;
