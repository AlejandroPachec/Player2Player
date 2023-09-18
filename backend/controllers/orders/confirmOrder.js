const getConnection = require('../../db/connectDB');
const generateError = require('../../helpers/generateError');
/* const emailVerification = require('../../helpers/emailVerification'); */
const confirmOrderSchema = require('../../schema/confirmOrderSchema');

async function confirmOrder (req, res, next) {
    try {
        const pool = await getConnection();

        const { error } = confirmOrderSchema.validate(req.body);

        if (error) {
            return next(generateError(error.message, 400));
        }

        const { exchangePlace, exchangeTime } = req.body;
        const { idProduct } = req.params;
        /* const idUser = req.user.id; */

        await pool.query(`
            UPDATE products
            SET availability = 0
            WHERE id = ?
        `, [idProduct]);

        await pool.query(`
            UPDATE orders
            SET exchange_place = ?, exchange_time = ?
            WHERE product_id = ?
        `, [exchangePlace, exchangeTime, idProduct]);
        /*
        const [[{ email }]] = await pool.query(`SELECT email FROM users WHERE id = ?`,
        [idUser]);

        const subject = 'Confirmación del pedido';

        const html = `<p>Disfruta de tu compra</p>
                        <p>Recogida:</p>
                        <p>Hora: ${exchangeTime}</p>
                        <p>Lugar: ${exchangePlace}</p>`;

        await emailVerification(email, subject, html);
        */
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
};

module.exports = confirmOrder;
