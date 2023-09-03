const getPool = require('./connectDB');

async function createDB() {
    try {
    // Conexión al Pool
        const pool = await getPool();

        // Creación a la base de datos
        await pool.query('CREATE DATABASE IF NOT EXISTS amazonia;');
        await pool.query('USE amazonia;');

        // Borrado de tablas
        await pool.query('DROP TABLES IF EXISTS order_products, orders, reviews, products, categories, user_addresses, addresses, users;'
        );

        await pool.query(`CREATE TABLE IF NOT EXISTS users (
      user_id VARCHAR(50) NOT NULL PRIMARY KEY,
      first_name VARCHAR(50) NOT NULL,
      last_name VARCHAR(50) NOT NULL,
      second_last_name VARCHAR(50) NULL,
      password VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL,
      avatar VARCHAR(100) NULL,
      registration_code VARCHAR(100) NULL,
      role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
      active TINYINT UNSIGNED NOT NULL DEFAULT 0,
      created_at DATETIME NOT NULL DEFAULT NOW(),
      modified_at DATETIME NULL
    );`);

        await pool.query(`CREATE TABLE IF NOT EXISTS addresses (
      address_id VARCHAR(50) NOT NULL PRIMARY KEY,
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
        FOREIGN KEY (user_id) REFERENCES users (user_id)
          ON DELETE RESTRICT
          ON UPDATE CASCADE
      );`);

        await pool.query(`CREATE TABLE IF NOT EXISTS categories (
        category_id VARCHAR(50) NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL
      );`);

        await pool.query(`CREATE TABLE IF NOT EXISTS products (
        product_id VARCHAR(50) NOT NULL PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        description TEXT(500) NULL,
        price DECIMAL(6,2) NULL,
        product_image VARCHAR(100) NOT NULL,
        stock INT NULL,
        modified_at DATETIME NULL,
        created_at DATETIME NULL DEFAULT NOW(),
        category_id VARCHAR(50) NOT NULL,
        FOREIGN KEY (category_id) REFERENCES categories (category_id)
        ON DELETE RESTRICT
          ON UPDATE CASCADE
      );`);

        await pool.query(`CREATE TABLE IF NOT EXISTS reviews (
        review_id VARCHAR(50) NOT NULL PRIMARY KEY,
        title VARCHAR(150) NOT NULL,
        text TEXT NULL,  
        stars ENUM('0', '1', '2', '3', '4', '5') NOT NULL,
        created_at VARCHAR(50) NOT NULL DEFAULT 'NOW()',
        modified_at DATETIME NULL,
        product_id VARCHAR(100) NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products (product_id)
        ON DELETE RESTRICT
          ON UPDATE CASCADE,
        user_id VARCHAR(50) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (user_id)
        ON DELETE RESTRICT
          ON UPDATE CASCADE
        );`);

        await pool.query(`CREATE TABLE IF NOT EXISTS orders (
        order_id VARCHAR(50) NOT NULL PRIMARY KEY,
        created_at DATETIME NULL DEFAULT NOW(),
        modified_at DATETIME NULL,
        user_id VARCHAR(50) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (user_id)
          ON DELETE RESTRICT
          ON UPDATE CASCADE
      );`);

        await pool.query(`CREATE TABLE IF NOT EXISTS orders_products (
        order_id VARCHAR(50) NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders (order_id)
          ON DELETE RESTRICT
          ON UPDATE CASCADE,
        product_id VARCHAR(100) NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products (product_id)
          ON DELETE RESTRICT
          ON UPDATE CASCADE,
        quantity INT NOT NULL,
        PRIMARY KEY (order_id, product_id)
      );`);

        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

createDB();
