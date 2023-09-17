const Joi = require('joi');

const confirmOrderSchema = Joi.object({
    exchangePlace: Joi.string().max(100).pattern(/^[A-Za-zñÑ\sáéíóúÁÉÍÓÚüÜ]+$/u).required(),
    exchangeTime: Joi.date().greater('now')
});

module.exports = confirmOrderSchema;
