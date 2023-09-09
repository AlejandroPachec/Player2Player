/* eslint-disable no-tabs */
const getPool = require('./connectDB');

async function createDB () {
    try {
        const pool = await getPool();

        await pool.query('CREATE DATABASE IF NOT EXISTS amazonia;');
        await pool.query('USE amazonia;');

        await pool.query(
            'DROP TABLE IF EXISTS  orders, reviews, product_photo, products, categories, users_addresses, addresses, users;'
        );

        await pool.query(`CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(50) NOT NULL PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        second_last_name VARCHAR(50) NULL,		
        password VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
			  phone_number VARCHAR(15) NOT NULL,
        avatar VARCHAR(100) NULL,
        registration_code VARCHAR(100) NULL,
        role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
        active TINYINT UNSIGNED NOT NULL DEFAULT 0,
        created_at DATETIME NOT NULL DEFAULT NOW(),
        modified_at DATETIME NULL
        );`);

        await pool.query(`CREATE TABLE IF NOT EXISTS addresses (
     	id VARCHAR(50) NOT NULL PRIMARY KEY,
     	address VARCHAR(50) NOT NULL,
     	city VARCHAR(50) NOT NULL,
     	province VARCHAR(50) NOT NULL,
     	postal_code VARCHAR(10) NOT NULL,
      	country VARCHAR(50) NOT NULL,
    	created_at DATETIME NOT NULL DEFAULT NOW(),
      	modified_at DATETIME NULL
    	);`);

        await pool.query(`CREATE TABLE IF NOT EXISTS users_addresses (
      	address_id INT NOT NULL PRIMARY KEY,
      	user_id VARCHAR(50) NOT NULL,
      	FOREIGN KEY (user_id) REFERENCES users (id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
    	);`);

        await pool.query(`CREATE TABLE IF NOT EXISTS categories (
      	id VARCHAR(50) NOT NULL PRIMARY KEY,
      	category ENUM('Consolas', 'Videojuegos', 'Accesorios', 'Retro', 'Ordenadores') NOT NULL
    	);`);

        await pool.query(`CREATE TABLE IF NOT EXISTS products (
      	id VARCHAR(50) NOT NULL PRIMARY KEY,
      	name VARCHAR(150) NOT NULL,
      	description TEXT(500) NULL,
      	price DECIMAL(6,2) NULL,
      	product_image VARCHAR(100) NOT NULL,
      	stock INT NULL,
      	modified_at DATETIME NULL,
      	created_at DATETIME NULL DEFAULT NOW(),
				category_id VARCHAR(50) NOT NULL,
				FOREIGN KEY (category_id) REFERENCES categories (id)
			  ON DELETE RESTRICT
			  ON UPDATE CASCADE,
		    user_id VARCHAR(50) NOT NULL,
				FOREIGN KEY (user_id) REFERENCES users (id)
			  ON DELETE RESTRICT
			  ON UPDATE CASCADE
		);`);

        await pool.query(`CREATE TABLE IF NOT EXISTS product_photo (
		id VARCHAR(50) NOT NULL PRIMARY KEY,
		name VARCHAR(100) NOT NULL,
		modified_at DATETIME NULL,
		created_at DATETIME NULL DEFAULT NOW(),
		product_id VARCHAR(50) NOT NULL,
		FOREIGN KEY (product_id) REFERENCES products (id)
			ON DELETE RESTRICT
			ON UPDATE CASCADE
		)`);

        await pool.query(`CREATE TABLE IF NOT EXISTS reviews (
		id VARCHAR(50) NOT NULL PRIMARY KEY,
		title VARCHAR(150) NOT NULL,
		text TEXT NULL,  
		stars ENUM('1', '2', '3', '4', '5') NOT NULL,
		created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
		modified_at DATETIME NULL,
		product_id VARCHAR(100) NOT NULL,
		FOREIGN KEY (product_id) REFERENCES products (id)
			ON DELETE RESTRICT
			ON UPDATE CASCADE,
		user_id VARCHAR(50) NOT NULL,
		FOREIGN KEY (user_id) REFERENCES users (id)
			ON DELETE RESTRICT
			ON UPDATE CASCADE
    	);`);

        await pool.query(`CREATE TABLE IF NOT EXISTS orders (
   	    id VARCHAR(50) NOT NULL PRIMARY KEY,
		created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
		user_buyer_id VARCHAR(50) NOT NULL,
		FOREIGN KEY (user_buyer_id) REFERENCES users (id)
			ON DELETE RESTRICT
			ON UPDATE CASCADE,
		user_seller_id VARCHAR(50) NOT NULL,
		FOREIGN KEY (user_seller_id) REFERENCES users (id)
			ON DELETE RESTRICT
			ON UPDATE CASCADE,
		product_id VARCHAR(100) NOT NULL,
		FOREIGN KEY (product_id) REFERENCES products (id)
			ON DELETE RESTRICT
			ON UPDATE CASCADE
    	);`);

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

createDB();
