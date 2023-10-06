const getPool = require('./connectDB');

async function backUpDB () {

    const pool = await getPool();

    try {
        await pool.query(`INSERT INTO users (id, first_name, last_name, bio, password, email, phone_number, city, postal_code, avatar, active, created_at, modified_at)
    VALUES
    ('8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af', 'Juan', 'Pérez', 'Amante de los tesoros olvidados. Vendo lo que ya no necesito. ¡Encuentra tu próxima joya aquí!', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'juanitop@gmail.com', '635789245', 'Madrid', '28001', 'Kp9w3LxvYj2a4Pt.webp', 1, NOW(), NULL),
    ('56a789cc-2b8e-47f9-b2f6-81c8e73998dd', 'María', 'González', 'Dando una segunda vida a objetos queridos. Explora mi tienda de artículos pre-amados.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'maria93@hotmail.com', '649851237', 'Barcelona', '08001', 'Vp1Zw4Lq2Jt7XyK.webp', 1, NOW(), NULL),
    ('f02baf4a-67d7-4c8e-92f0-e40c0e7cf1b1', 'Carlos', 'Rodríguez', 'Redescubre la belleza en lo usado. ¡Mira lo que tengo para ti!', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'cr_1996@yahoo.com', '669557821', 'Valencia', '46001', 'QsR6zGpW7vK8oHq.webp', 1, NOW(), NULL),
    ('9a5e1a27-8e21-4f52-9547-6d4555a92456', 'Laura', 'Martínez', 'Apasionada por las antigüedades y lo vintage. Mi tienda está llena de hallazgos únicos.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'lauritta@gmail.com', '633548995', 'Sevilla', '41001', 'Aq9Bz3SxVc6Pv1N.webp', 1, NOW(), NULL),
    ('67a1f10d-3db9-4a0e-ba9c-88c5d1f4d6f7', 'Pedro', 'Peña', 'De lo viejo a lo nuevo. Encuentra gangas en mi selección de segunda mano.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'pedrop84@gmail.com', '625448957', 'Zaragoza', '50001', 'Xe2Tn4VzYj9AqBw.webp', 1, NOW(), NULL),
    ('c586d7bd-9e93-43b7-a67d-32a68278981f', 'Ana', 'López', 'Cazadora de tesoros. Cosas usadas con amor. ¡Descubre tus favoritos!', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'anitta_lopez@gmail.com', '655847123', 'Málaga', '29001', 'Hr2Tm5NvLq7Sx8P.webp', 1, NOW(), NULL),
    ('8f3c6e0a-2c7d-4dd2-9eef-77f27ecf31ac', 'David', 'Fernández', 'Un segundo hogar para tus objetos. Venta de segunda mano con cariño.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'davidf91@hotmail.com', '659741225', 'Murcia', '30001', 'Lm8Dc7RfKp1Sv3N.webp', 1, NOW(), NULL),
    ('45d84f9b-03a2-4d8c-af08-680efb8ca4ef', 'Isabel', 'Ramírez', 'Objetos con historia esperando un nuevo dueño. Ven y descúbrelos.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'isita.ramirez@yahoo.com', '638774596', 'A Coruña', '15601', 'Zv3Wx6QsR9Kp1L.webp', 1, NOW(), NULL),
    ('23f549c3-12c4-4e64-9ec3-5721a9c4d72c', 'Manuel', 'Torres', 'Aquí, lo viejo se vuelve nuevo. Tesoros de segunda mano para ti.', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'manu.hernandez@gmail.com', '677895423', 'Bilbao', '48001', 'Yk5Gp2WvJq8EzRt.webp', 1, NOW(), NULL),
    ('716c7c46-d9f0-4b2a-8f8d-62d7df41820d', 'Sofía', 'Hernández', 'En busca de nuevos amores para mis tesoros pre-amados. ¡Explora mi selección!', '$2b$10$eSKGLIQxfwV266Vp5CiG0uPItwY3okCmzGAYbI4keKRYU8qxYofYm', 'sofi_92_h@gmail.com', '684521796', 'Alicante', '03001', 'Bf4Cq8Ew2Yj7XtK.webp', 1, NOW(), NULL);
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
    ('3a60e157-4e36-4d4f-88a7-00cfad3aa8f7', 'PC Gaming RTX 3070Ti', 'PC Gaming con tarjeta gráfica NVIDIA RTX 3070Ti, ideal para juegos exigentes con gráficos de alta calidad', 'Ordenadores', 'Nuevo', 875.00, 1, NULL, NOW(), '716c7c46-d9f0-4b2a-8f8d-62d7df41820d'),
    ('9b9821c9-20c7-4f85-8f0b-0e2db0d99e99', 'Pokémon Amarillo', 'Juego completo con caja, funda, manual y mapa de Kanto. En muy buen estado como se ve en las fotos.', 'Retro', 'En buen estado', 60.00, 0, NULL, NOW(), '8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af'),
    ('a9d99eae-8697-4e12-88f0-152ad1f876c0', 'Google Nest Mini', 'Altavoz inteligente Google Nest mini, sin abrir', 'Accesorios', 'Nuevo', 25.00, 0, NULL, NOW(), '8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af'),
    ('f47ac10b-58cc-4372-a567-0e02b2c3d479', 'Stardew Valley', 'Videojuego Stardew Valley para Nintendo Switch. Forma parte de la edición coleccionista, totalmente jugable en castellano.', 'Videojuegos', 'En buen estado', 30.00, 0, NULL, NOW(), '56a789cc-2b8e-47f9-b2f6-81c8e73998dd'),
    ('98badf30-af02-4d58-8a30-8bb4b9df649d', 'Nintendo Switch', 'Nintendo Switch en muy buen estado, muy bien cuidada, con todos los cables que se necesitan (cargador y HDMI).', 'Consolas', 'En buen estado', 200.00, 0, NULL, NOW(), '56a789cc-2b8e-47f9-b2f6-81c8e73998dd'),
    ('edd3b26d-5586-46d5-9d3a-3814641c68e6', 'Zelda Tears Of the Kingdom', 'Juego nuevo a estrenar para Nintendo Switch', 'Videojuegos', 'Nuevo', 40.00, 0, NULL, NOW(), 'f02baf4a-67d7-4c8e-92f0-e40c0e7cf1b1'),
    ('521ae48a-6c6f-4931-8f51-7952c9154222', 'Alfombrilla LOL', 'Alfombrilla de League of Legends. Tamaño grande 90x40 cm', 'Accesorios', 'Nuevo', 18.00, 0, NULL, NOW(), 'f02baf4a-67d7-4c8e-92f0-e40c0e7cf1b1'),
    ('c1833aef-6a6e-4b8c-9203-6dd2b7c9dbf8', 'Dark Souls III', 'Dark Souls III para Xbox. Edición juego del año', 'Videojuegos', 'Aceptable', 25.00, 0, NULL, NOW(), '9a5e1a27-8e21-4f52-9547-6d4555a92456'),
    ('d6e6e47a-7d48-4c9a-94a9-29b6501e8254', 'PC Gamer', 'Vendo pc gamer principalmente utilizado para estudiar.', 'Ordenadores', 'En buen estado', 899.00, 0, NULL, NOW(), '9a5e1a27-8e21-4f52-9547-6d4555a92456'),
    ('e23f0c89-ae56-4ca5-8a52-4d927b2ef8cb', 'Minijuegos Switch', 'Juego para la switch con diferentes minijuegos para pasar un rato entretenido', 'Videojuegos', 'En buen estado', 30.00, 0, NULL, NOW(), '67a1f10d-3db9-4a0e-ba9c-88c5d1f4d6f7'),
    ('1f1e4b48-34e9-4f24-bfae-98675580f8a7', 'RTX 2060 SUPER GIGABYTE', 'Vendo gráfica RTX 2060 porque ya no tengo pc, prácticamente la he usado menos de un año, viene con su caja original', 'Accesorios', 'En buen estado', 185.00, 0, NULL, NOW(), '67a1f10d-3db9-4a0e-ba9c-88c5d1f4d6f7'),
    ('5f8d3b77-64ef-4d5c-9e47-9c0c63f0b44a', 'Game Boy poket', 'Game boy poket en perfecto estado,se le cambió la carcasa pero se entrega con también con la original. juego no incluido.', 'Retro', 'En buen estado', 70.00, 0, NULL, NOW(), 'c586d7bd-9e93-43b7-a67d-32a68278981f'),
    ('86a3b22d-03f5-4b60-9fb0-1cf1a927853d', 'Mortal Kombat', 'Mortal Kombat XL. Juego para play 4', 'Videojuegos', 'En buen estado', 12.00, 0, NULL, NOW(), '8f3c6e0a-2c7d-4dd2-9eef-77f27ecf31ac'),
    ('3f6d2b8c-79d0-44f9-a7c3-3d6e1cf9f17d', 'Mando Xbox', 'Mando Xbox Shock Blue Wireless y Bluethooth', 'Accesorios', 'Aceptable', 70.00, 0, NULL, NOW(), '45d84f9b-03a2-4d8c-af08-680efb8ca4ef'),
    ('6c6f2951-8e03-4ab0-b943-19e6e1b26b3d', 'Ratón inalámbrico Razer', 'Razer Viper Ultimate en casi perfecta condición. Ratón de lo mejor en el mercado. Inalámbrico. Viene con la caja y las instrucciones además de pegatinas.', 'Accesorios', 'En buen estado', 55.00, 0, NULL, NOW(), '45d84f9b-03a2-4d8c-af08-680efb8ca4ef'),
    ('bfa685f7-0c2c-4527-a7e9-8978c53446c0', 'Monitor Msi curvado', 'Lo he usado durante 5 meses me fue genial, ahora me compre otro y este no lo uso. Es de 75hz.', 'Accesorios', 'En buen estado', 100.00, 0, NULL, NOW(), '23f549c3-12c4-4e64-9ec3-5721a9c4d72c'),
    ('7f1a5e8d-2a4e-4a88-bf4d-8b9f08c8b745', 'Guitarra Guitar Hero', 'Guitarra del juego guitar hero para la wii con muy poco uso.', 'Accesorios', 'En buen estado', 18.00, 0, NULL, NOW(), '716c7c46-d9f0-4b2a-8f8d-62d7df41820d');
    `);

        await pool.query(`INSERT INTO product_photo (id, name, modified_at, created_at, product_id)
    VALUES
    ('01c96eae-2e2b-4f1c-976f-27d40e6f171d', 'Vh7pQaYtW9c4Rz2.webp', NULL, NOW(), 'd6ea75a4-3c82-48a5-ae13-72807ccf5471'),
    ('a548f1f5-875c-4e5d-9a63-7c23bc729a1b', 'K6sL3dF9gA2v1Jp.webp', NULL, NOW(), 'd6ea75a4-3c82-48a5-ae13-72807ccf5471'),
    ('7b9ae6ea-4e9f-45b5-849d-2363e7eb34c8', 'RzY8s2wQv7mE1xK.webp', NULL, NOW(), '7bce0973-ee2c-4c67-9a22-3f13a16d009c'),
    ('2f4c3e85-41c6-46a2-8f03-ffbd3d45e3b2', 'G4aB8vP6tN3rDqL.webp', NULL, NOW(), '7bce0973-ee2c-4c67-9a22-3f13a16d009c'),
    ('d6ac4d29-9c56-48e1-8203-ef49e98a1337', 'Xz1yVq9W5sJtGpF.webp', NULL, NOW(), '7bce0973-ee2c-4c67-9a22-3f13a16d009c'),
    ('8a5f6c21-ef79-47ab-aa45-15d2b3b6713f', 'L5qV2w4Jt7Pc1Kd.webp', NULL, NOW(), 'f1d3eaf2-56bd-497e-943f-904a5ddfa2a7'),
    ('4d718e9f-9ab3-4234-9b9d-6a4f831aaacc', 'D9gB3aRcLq1wXzV.webp', NULL, NOW(), 'f1d3eaf2-56bd-497e-943f-904a5ddfa2a7'),
    ('6e1a3d88-4527-4e72-9c7b-e5873f0d5c47', 'F7wE0a3x2Km6Lq9.webp', NULL, NOW(), '9f3d8b57-34c5-4a0f-a202-2b9bf5cc22d9'),
    ('b53e987c-6df6-4ed3-8c38-1a5f80d0ad86', 'H3rJc9VzW5yQp1.webp', NULL, NOW(), '9f3d8b57-34c5-4a0f-a202-2b9bf5cc22d9'),
    ('3cf8b7a1-8672-4b04-a542-28f8f7b8a9f6', 'Z7vM6xJt1RqB2w.webp', NULL, NOW(), '9f3d8b57-34c5-4a0f-a202-2b9bf5cc22d9'),
    ('72d4e1c9-4e7c-47a3-9c1e-9a63efb1bc7f', 'T9sGq2LwKdRzPvX.webp', NULL, NOW(), '1a8eb381-1bb4-4d36-8b97-7f465a94a4ce'),
    ('4e82c16b-d4fc-48b3-a41f-89c76436761a', 'B1mCw6EaPvXzQsR.webp', NULL, NOW(), '1e0543f1-5b76-4fc6-a91f-7650ab0bca23'),
    ('8d17fa39-2f3e-4c27-b7a2-e440f1328f7a', 'V3qRzLm8EwXtJk9.webp', NULL, NOW(), '1e0543f1-5b76-4fc6-a91f-7650ab0bca23'),
    ('e5b92f68-6b1d-4dd4-845b-973ef3aae4ec', 'N7yFz1AqBwDc6vK.webp', NULL, NOW(), '1e0543f1-5b76-4fc6-a91f-7650ab0bca23'),
    ('b2edfce9-dc98-4d31-8cc5-0651d62e73b3', 'Z6mVx1LwKdRz3sQ.webp', NULL, NOW(), 'a9c78d67-83b0-4d3e-927e-24aae71e5fbd'),
    ('9a41b40f-c04e-452e-9e1d-0b0bfb56f10c', 'H4tNw7QsRzGpKvJ.webp', NULL, NOW(), 'a9c78d67-83b0-4d3e-927e-24aae71e5fbd'),
    ('312e498b-69b3-4db9-90c3-d8309c6a7f0d', 'P6vRzB3mVxYjQsW.webp', NULL, NOW(), '6e238fca-e0a3-4c1d-998a-f73d7ca7a4e0'),
    ('f5e62f87-9e3b-4a9f-a181-148f72b1a834', 'L1qRz4xWv7SxKpE.webp', NULL, NOW(), 'cebbb58a-7b31-4a52-9c6e-c56b9edf4a53'),
    ('62a3d187-6abf-4672-aa79-f8bb2d8ed50a', 'X8yJt2wZvNc6QsR.webp', NULL, NOW(), 'cebbb58a-7b31-4a52-9c6e-c56b9edf4a53'),
    ('1d469867-3e7d-44b2-a78d-95bf5bb868f4', 'G3pLw7KdVqBxMzR.webp', NULL, NOW(), 'cebbb58a-7b31-4a52-9c6e-c56b9edf4a53'),
    ('9b5e8c4f-3d26-48b7-aa8d-6f1e27a1d9f1', 'E9wMz1qRzLxKdVj.webp', NULL, NOW(), '3a60e157-4e36-4d4f-88a7-00cfad3aa8f7'),
    ('4f78a3c7-9d2e-4b53-bc01-85e45dab1f3a', 'Y6vJtSxRzGpWcNq.webp', NULL, NOW(), '3a60e157-4e36-4d4f-88a7-00cfad3aa8f7'),
    ('8c9d7a1b-6f4e-45a2-9d7e-2d40e9c37685', 'D1sRzVc3pLw7KxM.webp', NULL, NOW(), '3a60e157-4e36-4d4f-88a7-00cfad3aa8f7'),
    ('7c301f88-27e7-4f7c-b793-c42c3e74a4e2', 'aF1Qp8uKoXjZb6t.webp', NULL, NOW(), '9b9821c9-20c7-4f85-8f0b-0e2db0d99e99'),
    ('25769c6c-d34d-4bfe-ba98-e0ee856f3e7a', '2jE9nGfW4sD1aT0v.webp', NULL, NOW(), 'a9d99eae-8697-4e12-88f0-152ad1f876c0'),
    ('7c9e6679-7425-40de-944b-e07fc1f90ae7', 'P5q8wR3y7uE2iL9k.webp', NULL, NOW(), 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),
    ('3edea46a-78df-4e39-b0f3-0b74a2747ecb', 'X6cV0zN1mB3oQ7p.webp', NULL, NOW(), '98badf30-af02-4d58-8a30-8bb4b9df649d'),
    ('78e95c1f-ccca-494e-ae0a-4a1f0d30efb1', 'T7Kb9Rz3wPvYsGx.webp', NULL, NOW(), 'edd3b26d-5586-46d5-9d3a-3814641c68e6'),
    ('670181d4-79c2-4b1a-9f33-eb1a786b437e', 'N5nLs2HrFvYtW8w.webp', NULL, NOW(), '521ae48a-6c6f-4931-8f51-7952c9154222'),
    ('f78e8412-9ef2-43cd-bd0e-2f1c53a4b566', 'G9eZpR2jLwTn4qA.webp', NULL, NOW(), 'c1833aef-6a6e-4b8c-9203-6dd2b7c9dbf8'),
    ('8c1e306f-0f1a-4daa-b75a-15a8e799cc63', 'Y6vBtR3aLq2zF8s.webp', NULL, NOW(), 'd6e6e47a-7d48-4c9a-94a9-29b6501e8254'),
    ('3f7b60f2-0e66-4c14-ae05-ef95e0e1dafa', 'K4oT8jM6yNpGwP7.webp', NULL, NOW(), 'e23f0c89-ae56-4ca5-8a52-4d927b2ef8cb'),
    ('3a7b6823-d9b3-4757-b8b9-67045c9ef2c3', 'VxZs9E2vD3wFt1L.webp', NULL, NOW(), '1f1e4b48-34e9-4f24-bfae-98675580f8a7'),
    ('d572974e-3617-4e3f-b986-95c7a3a65021', 'R9sT5XwGpLz2A1b.webp', NULL, NOW(), '5f8d3b77-64ef-4d5c-9e47-9c0c63f0b44a'),
    ('4efeb129-d2a5-4e6b-b693-1b90c9f19a80', 'Jp7VtR5LwG3eKzX.webp', NULL, NOW(), '86a3b22d-03f5-4b60-9fb0-1cf1a927853d'),
    ('9b20ac23-07ea-487a-ba6a-4a88a3663c79', 'S4a9Cv8FbX3eNwR.webp', NULL, NOW(), '3f6d2b8c-79d0-44f9-a7c3-3d6e1cf9f17d'),
    ('e4976f3d-8361-49ef-a98a-fcb7fb7e9aa6', 'T5nDq8vWpR2aXzL.webp', NULL, NOW(), '6c6f2951-8e03-4ab0-b943-19e6e1b26b3d'),
    ('1bb34db7-8742-4f15-88e5-509e12e6e773', 'M2xNw8RvZ3qA9sK.webp', NULL, NOW(), 'bfa685f7-0c2c-4527-a7e9-8978c53446c0'),
    ('6d9b3f6c-4e53-4aa5-9a8c-6e2c78ab951c', 'H8wS4tMnJzL6XpV.webp', NULL, NOW(), '7f1a5e8d-2a4e-4a88-bf4d-8b9f08c8b745');
    `);

    await pool.query(`INSERT INTO reviews (id, title, text, stars, created_at, modified_at, product_id, user_seller_id, user_buyer_id)
    VALUES
    ('c62f1f91-62a1-4be0-9a25-e02e7d27f8bf', 'Vino en su caja, todo perfecto', 'Todo perfecto!! Buena comunicacion, simpatico y atento! De 10!!', '5', NOW(), NULL, '9b9821c9-20c7-4f85-8f0b-0e2db0d99e99', '8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af', '67a1f10d-3db9-4a0e-ba9c-88c5d1f4d6f7'),
    ('2c4c6a2d-86c8-4e94-8b4f-5240b899a9d2', 'Excelente', 'Vendedor muy recomendable', '4', NOW(), NULL, 'a9d99eae-8697-4e12-88f0-152ad1f876c0', '8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af', '56a789cc-2b8e-47f9-b2f6-81c8e73998dd'),
    ('b7a2c6c4-d3e0-47d8-81d9-1f7f0c11c18e', 'Bien calidad/precio', 'Todo muy bien y correcto!!', '3', NOW(), NULL, 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '56a789cc-2b8e-47f9-b2f6-81c8e73998dd', 'f02baf4a-67d7-4c8e-92f0-e40c0e7cf1b1'),
    ('97f9b5e6-f8c5-4e95-97ad-6e363d2f731b', 'En perfecto estado', 'Trato bueno, rápido y sin complicaciones. Buen comprador, puntual, cumple con lo acordado y no te deja tirado. ', '4', NOW(), NULL, '98badf30-af02-4d58-8a30-8bb4b9df649d', '56a789cc-2b8e-47f9-b2f6-81c8e73998dd', '9a5e1a27-8e21-4f52-9547-6d4555a92456'),
    ('a3d7b17e-8e3e-4eab-95d1-f29bbae84c6f', 'Caja en perfectas condiciones', 'Todo perfecto, vendedor totalmente recomendable, muchas gracias', '5', NOW(), NULL, 'edd3b26d-5586-46d5-9d3a-3814641c68e6', 'f02baf4a-67d7-4c8e-92f0-e40c0e7cf1b1', '8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af'),
    ('6a74a0bc-65ac-4e5e-a172-d06c1818edc9', 'Estaba para estrenar', 'Vendedor muy amable, contesta rápido y el artículo estaba mejor que nuevo.', '5', NOW(), NULL, '521ae48a-6c6f-4931-8f51-7952c9154222', 'f02baf4a-67d7-4c8e-92f0-e40c0e7cf1b1', 'c586d7bd-9e93-43b7-a67d-32a68278981f'),
    ('e22b9f20-486c-4d72-9e56-95f0a1e7a5dd', 'Gran juego', 'La caja del articulo estaba un poco defectuosa', '3', NOW(), NULL, 'c1833aef-6a6e-4b8c-9203-6dd2b7c9dbf8', '9a5e1a27-8e21-4f52-9547-6d4555a92456', '8f3c6e0a-2c7d-4dd2-9eef-77f27ecf31ac'),
    ('894e27a3-1d8a-4f5c-b75d-2b4813d3ec7f', 'El ordenador va muy bien', 'El vendedor tarda en contestar. No es puntual, por lo demás bien', '3', NOW(), NULL, 'd6e6e47a-7d48-4c9a-94a9-29b6501e8254', '9a5e1a27-8e21-4f52-9547-6d4555a92456', '45d84f9b-03a2-4d8c-af08-680efb8ca4ef'),
    ('4e6d53dd-3e24-4f71-a5c1-1af2974f49c6', 'Respondio muy rápido', 'Artículo en perfecto estado. Vendedor 100% de confianza.', '4', NOW(), NULL, 'e23f0c89-ae56-4ca5-8a52-4d927b2ef8cb', '67a1f10d-3db9-4a0e-ba9c-88c5d1f4d6f7', '23f549c3-12c4-4e64-9ec3-5721a9c4d72c'),
    ('5b23f6ca-345c-45e9-9a1a-8e40f4e0e903', 'Funciona fenomenal, silencioso', 'Todo perfecto, comprador absolutamente recomendable, no he tenido ningún problema con el.', '5', NOW(), NULL, '1f1e4b48-34e9-4f24-bfae-98675580f8a7', '67a1f10d-3db9-4a0e-ba9c-88c5d1f4d6f7', '716c7c46-d9f0-4b2a-8f8d-62d7df41820d'),
    ('712fbc72-743f-42d3-845a-253a43a6655d', 'Muy bien conservada', 'Muy bien', '5', NOW(), NULL, '5f8d3b77-64ef-4d5c-9e47-9c0c63f0b44a', 'c586d7bd-9e93-43b7-a67d-32a68278981f', '8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af'),
    ('61e53ef1-cc2a-442f-b752-45b8a1ea197a', 'Estaba en perfecto estado', 'Recomendado 100%', '4', NOW(), NULL, '86a3b22d-03f5-4b60-9fb0-1cf1a927853d', '8f3c6e0a-2c7d-4dd2-9eef-77f27ecf31ac', '9a5e1a27-8e21-4f52-9547-6d4555a92456'),
    ('7f21e1e6-46e3-4c66-9297-928e1595432a', 'Realmente cómodo', 'Muy amable y atento, el producto genial y perfecto, lo recomiendo 100%', '3', NOW(), NULL, '3f6d2b8c-79d0-44f9-a7c3-3d6e1cf9f17d', '45d84f9b-03a2-4d8c-af08-680efb8ca4ef', 'c586d7bd-9e93-43b7-a67d-32a68278981f'),
    ('e45f678f-8844-4f2b-9b68-1c38ffdb22a9', 'Es inalámbrico', 'Excelente servicio', '4', NOW(), NULL, '6c6f2951-8e03-4ab0-b943-19e6e1b26b3d', '45d84f9b-03a2-4d8c-af08-680efb8ca4ef', '8f3c6e0a-2c7d-4dd2-9eef-77f27ecf31ac'),
    ('82e4e63b-937d-4e1d-8349-4c62cfc153bb', 'Muy buen estado', 'Perfecto gracias', '3', NOW(), NULL, 'bfa685f7-0c2c-4527-a7e9-8978c53446c0', '23f549c3-12c4-4e64-9ec3-5721a9c4d72c', '9a5e1a27-8e21-4f52-9547-6d4555a92456'),
    ('9d7e3e6c-9621-41d9-9fc0-9c5f6a34e6c8', 'Atenta y rápida', 'Sin ningún problema, repetiría sin dudarlo.', '5', NOW(), NULL, '7f1a5e8d-2a4e-4a88-bf4d-8b9f08c8b745', '716c7c46-d9f0-4b2a-8f8d-62d7df41820d', '8dcd6ef6-35e0-4eb1-9e20-44d77eb5c2af');

    `);


    /*    await pool.query(`INSERT INTO orders (id, exchange_place, exchange_time, user_buyer_id, user_seller_id, product_id, created_at)
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
