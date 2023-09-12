const Joi = require('joi');

const addProductSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().min(2).max(500).required(),
    price: Joi.number().positive().max(100000).required(),
    product_image: Joi.string().max(100),
    category: Joi.any().valid('Consolas', 'Videojuegos', 'Accesorios', 'Retro', 'Ordenadores').required(),
    state: Joi.any().valid('Nuevo', 'En buen estado', 'Aceptable', 'No da para más').required()
});

module.exports = addProductSchema;
