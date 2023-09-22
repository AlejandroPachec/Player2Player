const getPool = require('../../db/connectDB');
const generateError = require('../../helpers/generateError');
const emailVerification = require('../../helpers/emailVerification');
const confirmOrderSchema = require('../../schema/confirmOrderSchema');
const { PORT } = require('../../config');

async function confirmOrder (req, res, next) {
    try {
        const pool = await getPool();

        const { error } = confirmOrderSchema.validate(req.body);

        if (error) {
            return next(generateError(error.message, 400));
        }
        const { exchangePlace, exchangeTime } = req.body;
        const { idOrder } = req.params;

        const [[order]] = await pool.query(
            `
            SELECT * FROM orders WHERE id = ?
        `,
            [idOrder]
        );

        if (order.status === 'Aceptado') {
            return next(generateError('Este pedido ya ha sido aceptado', 400));
        }
        await pool.query(
            `
            UPDATE products
            SET availability = 0
            WHERE id = ?
        `,
            [order.product_id]
        );

        await pool.query(
            `
            UPDATE orders
            SET exchange_place = ?, exchange_time = ?
            WHERE id = ?
        `,
            [exchangePlace, exchangeTime, order.id]
        );

        await pool.query(
            `
            UPDATE orders
            SET status = 'Aceptado'
            WHERE id = ?
        `,
            [order.id]
        );

        const [[{ email }]] = await pool.query(
            'SELECT email FROM users WHERE id = ?',
            [order.user_buyer_id]
        );


        const subject = '[Player2Player] Confirmación del pedido';

        const html = `<p>Disfruta de tu compra</p>
                        <p>Recogida:</p>
                        <p>Hora: ${exchangeTime}</p>
                        <p>Lugar: ${exchangePlace}</p>
                        <p>Comprueba el estado de tu pedido <a href="http://localhost:${PORT}/orders/${idOrder}">aquí</a></p>`;

        await emailVerification(email, subject, html);

        await pool.query(
            `
                            UPDATE orders
                            SET status = 'Rechazado'
                            WHERE product_id = ? AND status NOT LIKE '%Aceptado%'
                        `,
            [order.product_id]
        );


        try {
            const [email] = await pool.query(
                `SELECT U.email FROM users U
                INNER JOIN orders O ON O.user_buyer_id = U.id
                WHERE O.product_id = ? AND O.status LIKE 'Rechazado'
                `,
                [order.product_id]
            );
            console.log(email);
/* 
            const subject = '[Player2Player] Producto no disponible';

            const html = `<p>Lo sentimos mucho, este producto ya no está disponible</p>
            <p>Pero tenemos buenas noticias: Tienes miles de productos que explorar en Player2Player, ¡te esperamos <a href="http://localhost:${PORT}/">aquí!</a></p>`; */
/* 
            await emailVerification(email, subject, html);
 */
        } catch (error) {
            console.log(error);
            next(error);
        };



        res.status(200).send({
            status: 'Ok',
            message: 'Le enviaremos un email al comprador con los datos',
            data: {
                exchangePlace,
                exchangeTime
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = confirmOrder;
