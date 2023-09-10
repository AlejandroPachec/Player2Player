const Joi = require('joi');

const createUserSchema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    secondLastName: Joi.string().min(2).max(50),
    email: Joi.string().email().max(100).required(),
    password: Joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/),
    phone: Joi.string().max(15).required()
});

module.exports = createUserSchema;
