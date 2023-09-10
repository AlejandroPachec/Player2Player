const getPool = require('../db/connectDB');
const addProductSchema = require('../schema/addProductSchema');
const generateError = require('../helpers/generateError');



async function addProduct (req, res, next) {
  const { error } = addProductSchema.validate(req.body);

  if (error) {
    return next(generateError(error.details[0].message, 400));
  }

  try {
    const { name, description, price, product_image, category } = req.body;
    const id = crypto.randomUUID();
    const pool = await getPool();

    await pool.query('INSERT INTO products(id, name, description, price, product_image, category) VALUES (?, ?, ?, ?, ?, ?)', [id, name, description, price, product_image, category]);

    res.status(200).send({
      status: 'Ok',
      message: 'Producto creado correctamente',
      data: {
        product_id: id,
        name,
        description,
        price,
        product_image,
        category
      }
    });
  } catch (error) {
    next(error);
  }
}

module.exports = addProduct

