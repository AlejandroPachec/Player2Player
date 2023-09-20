require('dotenv').config();

const PORT = process.env.PORT || 5002;
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || '1234';
const MYSQL_PORT = process.env.MYSQL_PORT || '3306';
const MYSQL_DB_NAME = process.env.MYSQL_DB_NAME || 'p2p_db';
const SMTP_USER = process.env.SMTP_USER || 'player2playershop@gmail.com';
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
