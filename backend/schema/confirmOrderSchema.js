const Joi = require('joi');

const confirmOrderSchema = Joi.object({
    exchangePlace: Joi.string().max(100).required(),
    exchangeTime: Joi.date().greater('now')
});

module.exports = confirmOrderSchema;
