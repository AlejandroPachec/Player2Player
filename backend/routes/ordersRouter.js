const express = require('express');
const orderRouter = express.Router();
const authUser = require('../middlewares/authUser');

const addOrder = require('../controllers/orders/addOrder');
const getUserOrder = require('../controllers/orders/getUserOrder');
const confirmOrder = require('../controllers/orders/confirmOrder');
const rejectOrder = require('../controllers/orders/rejectOrder');

orderRouter.post('/user/:idProduct', authUser, addOrder);
orderRouter.get('/:idOrder?', authUser, getUserOrder);
orderRouter.put('/confirm/:idOrder', authUser, confirmOrder);
orderRouter.put('/deny/:idOrder', authUser, rejectOrder);

module.exports = orderRouter;
