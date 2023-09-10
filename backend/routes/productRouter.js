const express = require('express');
const getProducts = require('../controllers/getProducts');
const productsRouter = express.Router();

productsRouter.get('/products', getProducts);

module.exports = productsRouter;
