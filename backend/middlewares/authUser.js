const jwt = require('jsonwebtoken');
const generateError = require('../helpers/generateError');
const getPool = require('../db/connectDB');

const authUser = async (req, res, next) => {
    try {
        const token = req.headers.token;

        if (!token) {
            generateError('Falta el token de autenticación');
        }

        const tokenInfo = await jwt.verify(token, process.env.SECRET);

        const pool = await getPool();
        const [[user]] = await pool.query(
            'SELECT email, avatar FROM users WHERE id = ?',
            [tokenInfo.id]
        );

        if (!user) {
            generateError('El usuario no existe');
        }

        req.user = tokenInfo;

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = authUser;
