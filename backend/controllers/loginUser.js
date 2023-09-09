const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const getConnection = require('../db/connectDB');
const loginUserSchema = require('../schema/loginUserSchema');
const generateError = require('../helpers/generateError');

async function loginUser (req, res, next) {
    const { error } = loginUserSchema.validate(req.body);

    if (error) {
        return next(generateError(error.details[0].message, 400));
    }

    try {
        const pool = await getConnection();

        const { email, password } = req.body;

        const [userInfo] = await pool.query(
            'SELECT * FROM users WHERE email = ?;'
            , [email]);

        if (userInfo.length < 1) {
            return next(generateError('Email y/o contraseña incorrectos', 404));
        }

        const validatePassword = await bcrypt.compare(password, userInfo[0].password);

        if (!validatePassword) {
            return next(generateError('Email y/o contraseña incorrectos', 404));
        }

        const payload = {
            id: userInfo[0].id,
            role: userInfo[0].role
        };

        const { SECRET } = process.env;

        const token = jwt.sign(payload, SECRET, { expiresIn: '1w' });

        res.header({ token });

        res.status(200).send({
            status: 'Ok',
            message: 'Usuario logueado correctamente',
            data: {
                userInfo,
                token
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = loginUser;
