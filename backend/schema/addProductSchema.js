const Joi = require('joi');

const addProductSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().min(2).max(500).required(),
    price: Joi.number().positive().max(100000).required(),
    category: Joi.any().valid('Consolas', 'Videojuegos', 'Accesorios', 'Retro', 'Ordenadores').required(),
    state: Joi.any().valid('Nuevo', 'En buen estado', 'Aceptable', 'No da para más').required(),
    // photos: Joi.object({
    //     fieldName: Joi.string().valid('file'),
    //     originalNme: Joi.string(),
    //     mimetype: Joi.string().valid('image/jpeg', 'image/png', 'image/jpg')
    // })
});

module.exports = addProductSchema;
