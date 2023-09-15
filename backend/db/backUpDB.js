const getPool = require('./connectDB');

async function backUpDB () {

    const pool = await getPool();

    try {
        await pool.query(`INSERT INTO users (id, first_name, last_name, bio, password, email, phone_number, city, postal_code, avatar, registration_code, active, created_at, modified_at)
    VALUES
    ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', 'Usuario1', 'Apellido1', 'Descripción de Usuario1', 'contraseña1', 'usuario1@example.com', '1234567891', 'Ciudad1', '12345', 'avatar1.jpg', 'codigo1', 1, NOW(), NULL),
    ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', 'Usuario2', 'Apellido2', 'Descripción de Usuario2', 'contraseña2', 'usuario2@example.com', '1234567892', 'Ciudad2', '12346', 'avatar2.jpg', 'codigo2', 1, NOW(), NULL),
    ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', 'Usuario3', 'Apellido3', 'Descripción de Usuario3', 'contraseña3', 'usuario3@example.com', '1234567893', 'Ciudad3', '12347', 'avatar3.jpg', 'codigo3', 1, NOW(), NULL),
    ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', 'Usuario4', 'Apellido4', 'Descripción de Usuario4', 'contraseña4', 'usuario4@example.com', '1234567894', 'Ciudad4', '12348', 'avatar4.jpg', 'codigo4', 1, NOW(), NULL),
    ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', 'Usuario5', 'Apellido5', 'Descripción de Usuario5', 'contraseña5', 'usuario5@example.com', '1234567895', 'Ciudad5', '12349', 'avatar5.jpg', 'codigo5', 1, NOW(), NULL),
    ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed6', 'Usuario6', 'Apellido6', 'Descripción de Usuario6', 'contraseña6', 'usuario6@example.com', '1234567896', 'Ciudad6', '12350', 'avatar6.jpg', 'codigo6', 1, NOW(), NULL),
    ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed7', 'Usuario7', 'Apellido7', 'Descripción de Usuario7', 'contraseña7', 'usuario7@example.com', '1234567897', 'Ciudad7', '12351', 'avatar7.jpg', 'codigo7', 1, NOW(), NULL),
    ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed8', 'Usuario8', 'Apellido8', 'Descripción de Usuario8', 'contraseña8', 'usuario8@example.com', '1234567898', 'Ciudad8', '12352', 'avatar8.jpg', 'codigo8', 1, NOW(), NULL),
    ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed9', 'Usuario9', 'Apellido9', 'Descripción de Usuario9', 'contraseña9', 'usuario9@example.com', '1234567899', 'Ciudad9', '12353', 'avatar9.jpg', 'codigo9', 1, NOW(), NULL),
    ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed0', 'Usuario10', 'Apellido10', 'Descripción de Usuario10', 'contraseña10', 'usuario10@example.com', '1234567800', 'Ciudad10', '12354', 'avatar10.jpg', 'codigo10', 1, NOW(), NULL);
    `);

        await pool.query(`INSERT INTO products (id, name, description, category, state, price, availability, modified_at, created_at, user_id)
    VALUES
    ('2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', 'Producto1', 'Descripción de Producto1', 'Consolas', 'Nuevo', 199.99, 1, NULL, NOW(), '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1'),
    ('2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', 'Producto2', 'Descripción de Producto2', 'Videojuegos', 'En buen estado', 29.99, 1, NULL, NOW(), '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2'),
    ('2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', 'Producto3', 'Descripción de Producto3', 'Accesorios', 'Aceptable', 9.99, 1, NULL, NOW(), '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3'),
    ('2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', 'Producto4', 'Descripción de Producto4', 'Retro', 'En buen estado', 49.99, 1, NULL, NOW(), '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4'),
    ('2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', 'Producto5', 'Descripción de Producto5', 'Ordenadores', 'Nuevo', 799.99, 1, NULL, NOW(), '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5'),
    ('2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed6', 'Producto6', 'Descripción de Producto6', 'Consolas', 'Nuevo', 249.99, 1, NULL, NOW(), '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1'),
    ('2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed7', 'Producto7', 'Descripción de Producto7', 'Videojuegos', 'En buen estado', 19.99, 1, NULL, NOW(), '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2'),
    ('2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed8', 'Producto8', 'Descripción de Producto8', 'Accesorios', 'Aceptable', 7.99, 1, NULL, NOW(), '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3'),
    ('2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed9', 'Producto9', 'Descripción de Producto9', 'Retro', 'En buen estado', 39.99, 1, NULL, NOW(), '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4'),
    ('2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed0', 'Producto10', 'Descripción de Producto10', 'Ordenadores', 'Nuevo', 899.99, 1, NULL, NOW(), '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5');
    `);

        await pool.query(`INSERT INTO product_photo (id, name, modified_at, created_at, product_id)
    VALUES
    ('3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', 'foto1.jpg', NULL, NOW(), '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1'),
    ('3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', 'foto2.jpg', NULL, NOW(), '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2'),
    ('3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', 'foto3.jpg', NULL, NOW(), '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3'),
    ('3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', 'foto4.jpg', NULL, NOW(), '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4'),
    ('3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', 'foto5.jpg', NULL, NOW(), '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5'),
    ('3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed6', 'foto6.jpg', NULL, NOW(), '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1'),
    ('3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed7', 'foto7.jpg', NULL, NOW(), '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2'),
    ('3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed8', 'foto8.jpg', NULL, NOW(), '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3'),
    ('3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed9', 'foto9.jpg', NULL, NOW(), '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4'),
    ('3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed0', 'foto10.jpg', NULL, NOW(), '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5');
    `);

        await pool.query(`INSERT INTO reviews (id, title, text, stars, created_at, modified_at, product_id, user_seller_id, user_buyer_id)
    VALUES
    ('4b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', 'Reseña 1', 'Descripción de Reseña 1', '5', NOW(), NULL, '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2'),
    ('4b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', 'Reseña 2', 'Descripción de Reseña 2', '4', NOW(), NULL, '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3'),
    ('4b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', 'Reseña 3', 'Descripción de Reseña 3', '3', NOW(), NULL, '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4'),
    ('4b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', 'Reseña 4', 'Descripción de Reseña 4', '2', NOW(), NULL, '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5'),
    ('4b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', 'Reseña 5', 'Descripción de Reseña 5', '1', NOW(), NULL, '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1'),
    ('4b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed6', 'Reseña 6', 'Descripción de Reseña 6', '5', NOW(), NULL, '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2'),
    ('4b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed7', 'Reseña 7', 'Descripción de Reseña 7', '4', NOW(), NULL, '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3'),
    ('4b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed8', 'Reseña 8', 'Descripción de Reseña 8', '3', NOW(), NULL, '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4'),
    ('4b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed9', 'Reseña 9', 'Descripción de Reseña 9', '2', NOW(), NULL, '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5'),
    ('4b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed0', 'Reseña 10', 'Descripción de Reseña 10', '5', NOW(), NULL, '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2');

    `);


        await pool.query(`INSERT INTO orders (id, exchange_place, exchange_time, user_buyer_id, user_seller_id, product_id, created_at)
    VALUES
    ('5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', 'Lugar1', '2023-09-15 10:00:00', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', NOW()),
    ('5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', 'Lugar2', '2023-09-15 11:00:00', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', NOW()),
    ('5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', 'Lugar3', '2023-09-15 12:00:00', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', NOW()),
    ('5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', 'Lugar4', '2023-09-15 13:00:00', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', NOW()),
    ('5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', 'Lugar5', '2023-09-15 14:00:00', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', NOW()),
    ('5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed6', 'Lugar6', '2023-09-15 15:00:00', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', NOW()),
    ('5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed7', 'Lugar7', '2023-09-15 16:00:00', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed2', NOW()),
    ('5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed8', 'Lugar8', '2023-09-15 17:00:00', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed3', NOW()),
    ('5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed9', 'Lugar9', '2023-09-15 18:00:00', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed4', NOW()),
    ('5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed0', 'Lugar10', '2023-09-15 19:00:00', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed1', '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed5', NOW());
    `);

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

backUpDB();
