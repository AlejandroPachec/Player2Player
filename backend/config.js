require('dotenv').config();

const PORT = process.env.PORT || 5002;
const MYSQL_USER = process.env.MYSQLUSER || 'root';
const MYSQL_HOST = process.env.MYSQLHOST || 'localhost';
const MYSQL_PASSWORD = process.env.MYSQLPASSWORD || '1234';
const MYSQL_PORT = process.env.MYSQLPORT || '3306';
const MYSQL_DB_NAME = process.env.MYSQLDATABASE || 'p2p_db';
const SMTP_USER = process.env.SMTPUSER || 'player2playershop@gmail.com';
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || 'xsmtpsib-f743ea96fa21218569f4f9106f466726e3dbc5c76a59129ef009174a300874e9-46gRYjJOxt7E39kH';
const SECRET = process.env.SECRET || 'maoihd093hdaknefifa3fadc';
const UPLOADS_DIR = process.env.UPLOADS_DIR || 'uploads';

module.exports = {
    PORT,
    MYSQL_USER,
    MYSQL_HOST,
    MYSQL_PASSWORD,
    MYSQL_DB_NAME,
    SMTP_USER,
    SMTP_PASSWORD,
    SECRET,
    UPLOADS_DIR,
    MYSQL_PORT
};
