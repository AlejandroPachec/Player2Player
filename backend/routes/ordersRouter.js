const express = require('express');
const orderRouter = express.Router();
const authUser = require('../middlewares/authUser');

const addOrder = require('../controllers/orders/addOrder');
const getUserOrder = require('../controllers/orders/getUserOrder');


orderRouter.post('/user/:idProduct', authUser, addOrder);
orderRouter.get('/:idOrder?', authUser, getUserOrder);


module.exports = orderRouter;
