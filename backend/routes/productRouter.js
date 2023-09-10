const express = require('express');
const getProducts = require('../controllers/getProducts');
const addProduct = require('../controllers/addProduct');
const productsRouter = express.Router();

productsRouter.get('/products', getProducts);
productsRouter.post('/products/addProduct', addProduct);

module.exports = productsRouter;
