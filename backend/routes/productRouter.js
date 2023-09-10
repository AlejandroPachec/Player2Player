const express = require('express');
const getProducts = require('../controllers/getProducts');
const addProduct = require('../controllers/addProduct');
const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.post('/addProduct', addProduct);

module.exports = productsRouter;
