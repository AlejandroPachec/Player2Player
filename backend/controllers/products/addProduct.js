const crypto = require('crypto');
const getPool = require('../../db/connectDB');
const addProductSchema = require('../../schema/addProductSchema');
const generateError = require('../../helpers/generateError');

async function addProduct (req, res, next) {
    const { error } = addProductSchema.validate(req.body);

    if (error) {
        return next(generateError(error.details[0].message, 400));
    }

    try {
        const { name, description, price, category } = req.body;
        const id = crypto.randomUUID();
        const pool = await getPool();

        const [productDescription] = await pool.query('SELECT description FROM products WHERE description = ?', [description]);

        if (productDescription.length > 0) {
            return next(generateError('Ya existe un producto con esa descripción', 400));
        }

        await pool.query('INSERT INTO products(id, name, description, price, category, user_id) VALUES (?, ?, ?, ?, ?, ?)', [id, name, description, price, category, req.user.id]);

        res.status(200).send({
            status: 'Ok',
            message: 'Producto creado correctamente',
            data: {
                product_id: id,
                name,
                description,
                price,
                category,
                user_id: req.user.id
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = addProduct;
