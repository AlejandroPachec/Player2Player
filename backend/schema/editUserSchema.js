const Joi = require('joi');

const editUserSchema = Joi.object({
    firstName: Joi.string().min(2).max(50),
    lastName: Joi.string().min(2).max(50),
    bio: Joi.string().max(500),
    email: Joi.string().email().max(100),
    password: Joi.string().min(8).max(20).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/),
    phone: Joi.string().max(15),
    city: Joi.string().max(50),
    postalCode: Joi.string().min(4).max(10)
});

module.exports = editUserSchema;
