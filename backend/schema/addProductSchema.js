const Joi = require('joi');

const addProductSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().min(2).max(500).required(),
    price: Joi.number().positive().max(100000).required(),
    product_image: Joi.string().max(100).required(),
    category: Joi.any().valid('Consolas', 'Videojuegos', 'Accesorios', 'Retro', 'Ordenadores').required()
});

module.exports = addProductSchema;