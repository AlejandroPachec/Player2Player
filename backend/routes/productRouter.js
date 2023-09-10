const express = require('express');
const getProducts = require('../controllers/products/getProducts');
const addProduct = require('../controllers/products/addProduct');
const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.post('/addProduct', addProduct);

module.exports = productsRouter;
