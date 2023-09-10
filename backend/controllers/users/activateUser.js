/* eslint-disable no-tabs */
const Joi = require('joi');
const generateError = require('../../helpers/generateError');
const getConnection = require('../../db/connectDB');

async function activateUser (req, res, next) {
    const registrationCodeSchema = Joi.string().uuid().required();

    let registrationCode;

    try {
        registrationCode = await registrationCodeSchema.validateAsync(req.params.registrationCode);
    } catch (error) {
        return next(generateError('El código de activación no es válido', 400));
    }

    try {
        const pool = await getConnection();

        const [[idUser]] = await pool.query('SELECT id FROM users WHERE registration_code = ?', [registrationCode]);

        if (!idUser) {
            return next(generateError('El usuario que intenta activar no existe', 404));
        }

        await pool.query(`
			UPDATE users 
			SET registration_code = null,
			activate = true,
			modified_at = ?
			WHERE registration_code = ?`
        , [new Date(), registrationCode]);

    } catch (error) {

    }
    res.status(200).send({
        status: 'ok',
        message: 'Usuario activado correctamente'
    });
};

module.exports = activateUser;
