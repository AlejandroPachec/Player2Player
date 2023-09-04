const getPool = require('../db/connectDB');
const crypto = require('node:crypto');
const createUserSchema = require('../schema/createUserSchema');
const generateError = require('../helpers/generateError');


async function createUser (req, res, next) {
    const { error } = createUserSchema.validate(req.body);

    if (error) {
        return next(generateError(error.details[0].message, 400));
    }

    try {
        const { firstName, lastName, secondLastName, email, password, avatar } = req.body;
        console.log(firstName);
        const id = crypto.randomUUID();
        const pool = await getPool();

        await pool.query(`INSERT INTO users(user_id, first_name, last_name, second_last_name, email, password, avatar) 
            values (?, ?, ?, ?, ?, ?, ?)`, [id, firstName, lastName, secondLastName, email, password, avatar]);

        res.send(req.body);
    } catch (error) {
        next(error);
    }
}

module.exports = createUser;
