const getPool = require('./connectDB');

async function backUpDB () {

    const pool = await getPool();

    try {
        await pool.query(`INSERT INTO users (id, first_name, last_name, bio, password, email, phone_number, city, postal_code, avatar, active, created_at, modified_at)
    VALUES
    ('8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af', 'Juan', 'Pérez', 'Amante de los tesoros olvidados. Vendo lo que ya no necesito. ¡Encuentra tu próxima joya aquí!', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'juanitop@gmail.com', '635789245', 'Madrid', '28001', 'Kp9w3LxvYj2a4Pt.png', 1, NOW(), NULL),
    ('56a789cc-2b8e-47f9-b2f6-81c8e73998dd', 'María', 'González', 'Dando una segunda vida a objetos queridos. Explora mi tienda de artículos pre-amados.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'maria93@hotmail.com', '649851237', 'Barcelona', '08001', 'Vp1Zw4Lq2Jt7XyK.png', 1, NOW(), NULL),
    ('f02baf4a-67d7-4c8e-92f0-e40c0e7cf1b1', 'Carlos', 'Rodríguez', 'Redescubre la belleza en lo usado. ¡Mira lo que tengo para ti!', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'cr_1996@yahoo.com', '669557821', 'Valencia', '46001', 'QsR6zGpW7vK8oHq.png', 1, NOW(), NULL),
    ('9a5e1a27-8e21-4f52-9547-6d4555a92456', 'Laura', 'Martínez', 'Apasionada por las antigüedades y lo vintage. Mi tienda está llena de hallazgos únicos.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'lauritta@gmail.com', '633548995', 'Sevilla', '41001', 'Aq9Bz3SxVc6Pv1N.png', 1, NOW(), NULL),
    ('67a1f10d-3db9-4a0e-ba9c-88c5d1f4d6f7', 'Pedro', 'Peña', 'De lo viejo a lo nuevo. Encuentra gangas en mi selección de segunda mano.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'pedrop84@gmail.com', '625448957', 'Zaragoza', '50001', 'Xe2Tn4VzYj9AqBw.png', 1, NOW(), NULL),
    ('c586d7bd-9e93-43b7-a67d-32a68278981f', 'Ana', 'López', 'Cazadora de tesoros. Cosas usadas con amor. ¡Descubre tus favoritos!', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'anitta_lopez@gmail.com', '655847123', 'Málaga', '29001', 'Hr2Tm5NvLq7Sx8P.png', 1, NOW(), NULL),
    ('8f3c6e0a-2c7d-4dd2-9eef-77f27ecf31ac', 'David', 'Fernández', 'Un segundo hogar para tus objetos. Venta de segunda mano con cariño.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'davidf91@hotmail.com', '659741225', 'Murcia', '30001', 'Lm8Dc7RfKp1Sv3N.png', 1, NOW(), NULL),
    ('45d84f9b-03a2-4d8c-af08-680efb8ca4ef', 'Isabel', 'Ramírez', 'Objetos con historia esperando un nuevo dueño. Ven y descúbrelos.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'isita.ramirez@yahoo.com', '638774596', 'A Coruña', '15601', 'Zv3Wx6QsR9Kp1L.png', 1, NOW(), NULL),
    ('23f549c3-12c4-4e64-9ec3-5721a9c4d72c', 'Manuel', 'Torres', 'Aquí, lo viejo se vuelve nuevo. Tesoros de segunda mano para ti.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'manu.hernandez@gmail.com', '677895423', 'Bilbao', '48001', 'Yk5Gp2WvJq8EzRt.png', 1, NOW(), NULL),
    ('716c7c46-d9f0-4b2a-8f8d-62d7df41820d', 'Sofía', 'Hernández', 'En busca de nuevos amores para mis tesoros pre-amados. ¡Explora mi selección!', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'sofi_92_h@gmail.com', '684521796', 'Alicante', '03001', 'Bf4Cq8Ew2Yj7XtK.png', 1, NOW(), NULL);
    `);

        await pool.query(`INSERT INTO products (id, name, description, category, state, price, availability, modified_at, created_at, user_id)
    VALUES
    ('d6ea75a4-3c82-48a5-ae13-72807ccf5471', 'PlayStation 5', 'Vendo PS5 en perfecto estado, con mandos y todo lo necesario para jugar', 'Consolas', 'Nuevo', 600.00, 1, NULL, NOW(), '8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af'),
    ('7bce0973-ee2c-4c67-9a22-3f13a16d009c', 'Dark Souls II', 'Buen juego, lo conservo en perfecto estado con todos sus manuales', 'Videojuegos', 'En buen estado', 15.00, 1, NULL, NOW(), '9a5e1a27-8e21-4f52-9547-6d4555a92456'),
    ('f1d3eaf2-56bd-497e-943f-904a5ddfa2a7', 'Cascos Logitech G435', 'Cascos inalámbricos de Logitech. Color morado. Tiene algo de uso', 'Accesorios', 'Aceptable', 45.00, 1, NULL, NOW(), '8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af'),
    ('9f3d8b57-34c5-4a0f-a202-2b9bf5cc22d9', 'Nintendo 64', 'Increible Nintendo 64, con mando y Mario Kart 64. Estado perfecto, para rememorar tu infancia', 'Retro', 'En buen estado', 80.00, 1, NULL, NOW(), '9a5e1a27-8e21-4f52-9547-6d4555a92456'),
    ('1a8eb381-1bb4-4d36-8b97-7f465a94a4ce', 'Portatil ASUS ROG', 'Portatil de 1TB. Se vende por poco uso. Precio no negociable', 'Ordenadores', 'Nuevo', 455.00, 1, NULL, NOW(), '8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af'),
    ('1e0543f1-5b76-4fc6-a91f-7650ab0bca23', 'Xbox X', 'Vendo Xbox X. Completa e impecable', 'Consolas', 'Nuevo', 500.00, 1, NULL, NOW(), 'c586d7bd-9e93-43b7-a67d-32a68278981f'),
    ('a9c78d67-83b0-4d3e-927e-24aae71e5fbd', 'Fifa 23', 'Videojuego de fútbol. Es para la PlayStation 5', 'Videojuegos', 'En buen estado', 35.00, 1, NULL, NOW(), '8f3c6e0a-2c7d-4dd2-9eef-77f27ecf31ac'),
    ('6e238fca-e0a3-4c1d-998a-f73d7ca7a4e0', 'Teclado mecánico', 'Vendo teclado mecánico, perfecto para gamers. Respuesta táctil precisa y luces RGB', 'Accesorios', 'Aceptable', 20.00, 1, NULL, NOW(), '716c7c46-d9f0-4b2a-8f8d-62d7df41820d'),
    ('cebbb58a-7b31-4a52-9c6e-c56b9edf4a53', 'Game&Watch Zelda', 'Game&Watch con el juego The Legend of Zelda. Falta la caja original', 'Retro', 'En buen estado', 50.00, 1, NULL, NOW(), '8f3c6e0a-2c7d-4dd2-9eef-77f27ecf31ac'),
    ('3a60e157-4e36-4d4f-88a7-00cfad3aa8f7', 'PC Gaming RTX 3070Ti', 'PC Gaming con tarjeta gráfica NVIDIA RTX 3070Ti, ideal para juegos exigentes con gráficos de alta calidad', 'Ordenadores', 'Nuevo', 875.00, 1, NULL, NOW(), '716c7c46-d9f0-4b2a-8f8d-62d7df41820d');
    `);

        await pool.query(`INSERT INTO product_photo (id, name, modified_at, created_at, product_id)
    VALUES
    ('01c96eae-2e2b-4f1c-976f-27d40e6f171d', 'Vh7pQaYtW9c4Rz2.png', NULL, NOW(), 'd6ea75a4-3c82-48a5-ae13-72807ccf5471'),
    ('a548f1f5-875c-4e5d-9a63-7c23bc729a1b', 'K6sL3dF9gA2v1Jp.png', NULL, NOW(), 'd6ea75a4-3c82-48a5-ae13-72807ccf5471'),
    ('7b9ae6ea-4e9f-45b5-849d-2363e7eb34c8', 'RzY8s2wQv7mE1xK.png', NULL, NOW(), '7bce0973-ee2c-4c67-9a22-3f13a16d009c'),
    ('2f4c3e85-41c6-46a2-8f03-ffbd3d45e3b2', 'G4aB8vP6tN3rDqL.png', NULL, NOW(), '7bce0973-ee2c-4c67-9a22-3f13a16d009c'),
    ('d6ac4d29-9c56-48e1-8203-ef49e98a1337', 'Xz1yVq9W5sJtGpF.png', NULL, NOW(), '7bce0973-ee2c-4c67-9a22-3f13a16d009c'),
    ('8a5f6c21-ef79-47ab-aa45-15d2b3b6713f', 'L5qV2w4Jt7Pc1Kd.png', NULL, NOW(), 'f1d3eaf2-56bd-497e-943f-904a5ddfa2a7'),
    ('4d718e9f-9ab3-4234-9b9d-6a4f831aaacc', 'D9gB3aRcLq1wXzV.png', NULL, NOW(), 'f1d3eaf2-56bd-497e-943f-904a5ddfa2a7'),
    ('6e1a3d88-4527-4e72-9c7b-e5873f0d5c47', 'F7wE0a3x2Km6Lq9.png', NULL, NOW(), '9f3d8b57-34c5-4a0f-a202-2b9bf5cc22d9'),
    ('b53e987c-6df6-4ed3-8c38-1a5f80d0ad86', 'H3rJc9VzW5yQp1.png', NULL, NOW(), '9f3d8b57-34c5-4a0f-a202-2b9bf5cc22d9'),
    ('3cf8b7a1-8672-4b04-a542-28f8f7b8a9f6', 'Z7vM6xJt1RqB2w.png', NULL, NOW(), '9f3d8b57-34c5-4a0f-a202-2b9bf5cc22d9'),
    ('72d4e1c9-4e7c-47a3-9c1e-9a63efb1bc7f', 'T9sGq2LwKdRzPvX.png', NULL, NOW(), '1a8eb381-1bb4-4d36-8b97-7f465a94a4ce'),
    ('4e82c16b-d4fc-48b3-a41f-89c76436761a', 'B1mCw6EaPvXzQsR.png', NULL, NOW(), '1e0543f1-5b76-4fc6-a91f-7650ab0bca23'),
    ('8d17fa39-2f3e-4c27-b7a2-e440f1328f7a', 'V3qRzLm8EwXtJk9.png', NULL, NOW(), '1e0543f1-5b76-4fc6-a91f-7650ab0bca23'),
    ('e5b92f68-6b1d-4dd4-845b-973ef3aae4ec', 'N7yFz1AqBwDc6vK.png', NULL, NOW(), '1e0543f1-5b76-4fc6-a91f-7650ab0bca23'),
    ('b2edfce9-dc98-4d31-8cc5-0651d62e73b3', 'Z6mVx1LwKdRz3sQ.png', NULL, NOW(), 'a9c78d67-83b0-4d3e-927e-24aae71e5fbd'),
    ('9a41b40f-c04e-452e-9e1d-0b0bfb56f10c', 'H4tNw7QsRzGpKvJ.png', NULL, NOW(), 'a9c78d67-83b0-4d3e-927e-24aae71e5fbd'),
    ('312e498b-69b3-4db9-90c3-d8309c6a7f0d', 'P6vRzB3mVxYjQsW.png', NULL, NOW(), '6e238fca-e0a3-4c1d-998a-f73d7ca7a4e0'),
    ('f5e62f87-9e3b-4a9f-a181-148f72b1a834', 'L1qRz4xWv7SxKpE.png', NULL, NOW(), 'cebbb58a-7b31-4a52-9c6e-c56b9edf4a53'),
    ('62a3d187-6abf-4672-aa79-f8bb2d8ed50a', 'X8yJt2wZvNc6QsR.png', NULL, NOW(), 'cebbb58a-7b31-4a52-9c6e-c56b9edf4a53'),
    ('1d469867-3e7d-44b2-a78d-95bf5bb868f4', 'G3pLw7KdVqBxMzR.png', NULL, NOW(), 'cebbb58a-7b31-4a52-9c6e-c56b9edf4a53'),
    ('9b5e8c4f-3d26-48b7-aa8d-6f1e27a1d9f1', 'E9wMz1qRzLxKdVj.png', NULL, NOW(), '3a60e157-4e36-4d4f-88a7-00cfad3aa8f7'),
    ('4f78a3c7-9d2e-4b53-bc01-85e45dab1f3a', 'Y6vJtSxRzGpWcNq.png', NULL, NOW(), '3a60e157-4e36-4d4f-88a7-00cfad3aa8f7'),
    ('8c9d7a1b-6f4e-45a2-9d7e-2d40e9c37685', 'D1sRzVc3pLw7KxM.png', NULL, NOW(), '3a60e157-4e36-4d4f-88a7-00cfad3aa8f7');
    `);

/*         await pool.query(`INSERT INTO reviews (id, title, text, stars, created_at, modified_at, product_id, user_seller_id, user_buyer_id)
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
    `); */

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

backUpDB();
