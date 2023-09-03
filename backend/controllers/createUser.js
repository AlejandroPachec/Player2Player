const getPool = require('../db/connectDB');
const crypto = require('node:crypto');

async function createUser (req, res, next) {
    console.log('funciona');
    try {
        const { firstName, lastName, secondLastName, email, password, avatar } = req.body;
        console.log(firstName);
        const id = crypto.randomUUID();
        const pool = await getPool();

        await pool.query(`INSERT INTO users(user_id, first_name, last_name, password, second_last_name, email, avatar) 
    values (?, ?, ?, ?, ?, ?, ?)`, [id, firstName, lastName, secondLastName, email, password, avatar]);

        res.send(req.body);
    } catch (error) {
        res.send(error);
        process.exit(1);
    }
}

module.exports = createUser;
