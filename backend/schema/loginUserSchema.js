const Joi = require('joi');

const loginUserSchema = Joi.object({
    email: Joi.string().email().max(100).required(),
    password: Joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)
});

module.exports = loginUserSchema;
