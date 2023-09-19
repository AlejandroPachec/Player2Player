// Conexion base de datos
const mysql = require('mysql2/promise');
require('dotenv').config();
const { MYSQL_USER, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_DB_NAME } = require('../config');

const dbConfig = {
    host: MYSQL_HOST,
    user: MYSQL_USER,
    database: MYSQL_DB_NAME,
    password: MYSQL_PASSWORD,
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
