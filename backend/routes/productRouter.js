const express = require('express');
const getProducts = require('../controllers/products/getProducts');
const addProduct = require('../controllers/products/addProduct');
const getProduct = require('../controllers/products/getProduct');
const authUser = require('../middlewares/authUser');

const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.post('/addProduct', authUser, addProduct);
productsRouter.get('/:idProduct', getProduct);


module.exports = productsRouter;
