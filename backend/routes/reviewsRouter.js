const express = require('express');
const reviewsRouter = express.Router();

const getUserReviews = require('../controllers/reviews/getUserReviews');

reviewsRouter.get('/:idUser', getUserReviews);

module.exports = reviewsRouter;
