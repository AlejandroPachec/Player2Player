const crypto = require('crypto');
const getPool = require('../../db/connectDB');
const addProductSchema = require('../../schema/addProductSchema');
const generateError = require('../../helpers/generateError');
const savePhoto = require('../../helpers/savePhoto');

async function addProduct (req, res, next) {
    const { error } = addProductSchema.validate(req.body);

    if (error) {
        return next(generateError(error.details[0].message, 400));
    }

    try {
        const pool = await getPool();
        
        const { name, description, price, category, state } = req.body;

        // //* Verificamos que no exista un producto con la misma descripción

        const [productDescription] = await pool.query('SELECT description FROM products WHERE description = ?', [description]);
        if (productDescription.length > 0) {
            return next(generateError('Ya existe un producto con esa descripción', 400));
        }

        //* Generamos un id random tanto para el producto como para la foto

        const id = crypto.randomUUID();

        //* Generamos el nombre de la foto y la guardamos
        
        await pool.query('INSERT INTO products(id, name, description, price, category, state, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [id, name, description, price, category, state, req.user.id]);
        
        if (req.files.photos && Object.keys(req.files.photos).length > 0) {
            
        //* Guardamos las primeras 7 fotos

            for (const photo of Object.values(req.files.photos).slice(0, 7)) {
                const photoName = await savePhoto(photo, 500);
                const photo_id = crypto.randomUUID();
                
        //* Guardamos la foto en la base de datos      
          
                await pool.query(
                `INSERT INTO product_photo (id ,name, product_id) VALUES (?, ?, ?)`,
                [photo_id, photoName, id]
              );
            }
          }

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
                
            }
        });
    } catch (error) {
        throw generateError(error, 500);
        next(error);
    }
}

module.exports = addProduct;
