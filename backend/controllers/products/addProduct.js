const crypto = require('crypto');
const getPool = require('../../db/connectDB');
const addProductSchema = require('../../schema/addProductSchema');
const generateError = require('../../helpers/generateError');
const savePhoto = require('../../helpers/savePhoto');
const { photoSchema, arrayPhotoSchema } = require('../../schema/PhotoSchema');


async function addProduct (req, res, next) {
    let insertedPhotos = [];	
    let errorSchema; 

    if (Array.isArray(req.files.photos)) {
        const { error } = arrayPhotoSchema.validate(req.files.photos)
        errorSchema = error;
    } else {
        const { error } = photoSchema.validate(req.files.photos);
        errorSchema = error;
    } 

    if (errorSchema) {
        return next(generateError(errorSchema.details[0].message, 400));
    };

    try {
        const pool = await getPool();
        const { name, description, price, category, state } = req.body;

        // //* Verificamos que no exista un producto con la misma descripción

        const [productDescription] = await pool.query('SELECT description FROM products WHERE description = ?', [description]);
        if (productDescription.length > 0) {
            return next(generateError('Ya existe un producto con esa descripción', 400));
        }

        //* Generamos un id random  para el producto

        const id = crypto.randomUUID();

        //* Damos error si no subimos ninguna foto
        
        if (!req.files?.photos) {
            return next(generateError('No has subido ninguna foto', 400));
        }
        
        //* Guardamos e insertamos las fotos
        
        if (req.files.photos.length > 8) {
            return next(generateError('Has subido demasiadas fotos. Máximo 8', 400));
        };
        
        await pool.query('INSERT INTO products(id, name, description, price, category, state, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [id, name, description, price, category, state, req.user.id]);
        
        for (const photo of Object.values(req.files.photos)) {
            const photoName = await savePhoto(photo, 500);
            
            const photo_id = crypto.randomUUID();
            
            await pool.query(
                `INSERT INTO product_photo (id ,name, product_id) VALUES (?, ?, ?)`,
                [photo_id, photoName, id]
                );
                
                insertedPhotos.push(photoName);
                
            };
        
            //* Insertamos el producto
        res.status(200).send({
            status: 'Ok',
            message: 'Producto creado correctamente',
            data: {
                product_id: id,
                name,
                description,
                price,
                category,
                state,
                user_id: req.user.id,
                photos: insertedPhotos
            }
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
}

module.exports = addProduct;
