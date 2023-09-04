// Conexion base de datos
const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
    host: process.env.MYSQL_HOST,
    port: process.env.PORT,
    user: process.env.MYSQL_USER,
    database: 'amazonia',
    password: process.env.MYSQL_PASSWORD,
    timezone: 'local'
};

let pool;

async function getPool () {
    if (!pool) {
        pool = await mysql.createPool(dbConfig);
    }

    return pool;
}

module.exports = getPool;
