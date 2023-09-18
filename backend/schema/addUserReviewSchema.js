const Joi = require('joi');

const addUserReviewSchema = Joi.object({
    title: Joi.string().min(2).max(150).required(),
    text: Joi.string().allow(null, '').max(1000),
    stars: Joi.any().valid('1', '2', '3', '4', '5').required()
});

module.exports = addUserReviewSchema;
