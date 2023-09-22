const getPool = require('../../db/connectDB');
const generateError = require('../../helpers/generateError');
const emailVerification = require('../../helpers/emailVerification');
const { PORT } = require('../../config');

async function rejectOrder (req, res, next) {
    try {
        const pool = await getPool();

        const { idOrder } = req.params;

        const [[order]] = await pool.query(`
            SELECT * FROM orders WHERE id = ?
        `, [idOrder]);

        if (!order) {
            return next(generateError('No se ha encontrado ningún pedido', 400));
        }

        const [[{ email }]] = await pool.query('SELECT email FROM users WHERE id = ?',
            [order.user_buyer_id]);

        const subject = '[Player2Player] Tu pedido ha sido rechazado';

        const html = `<p>Ups! Lo sentimos, tu pedido ha sido rechazado</p>
                        <p>Pero tenemos buenas noticias: Tienes miles de productos que explorar en Player2Player, ¡te esperamos <a href="http://localhost:${PORT}/">aquí!</a></p>`;

        await emailVerification(email, subject, html);

        res.status(200).send({
            status: 'Ok',
            message: 'Le enviaremos un email al comprador notificando el rechazo del pedido'
        });
    } catch (error) {
        next(generateError(error, 500));
    }
};

module.exports = rejectOrder;
