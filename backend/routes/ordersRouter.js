const express = require('express');
const orderRouter = express.Router();
const authUser = require('../middlewares/authUser');

const addOrder = require('../controllers/orders/addOrder');
const getUserOrder = require('../controllers/orders/getUserOrder');
const confirmOrder = require('../controllers/orders/confirmOrder');

orderRouter.post('/user/:idProduct', authUser, addOrder);
orderRouter.get('/:idOrder?', authUser, getUserOrder);
orderRouter.put('/confirm/:idProduct', authUser, confirmOrder);

module.exports = orderRouter;
