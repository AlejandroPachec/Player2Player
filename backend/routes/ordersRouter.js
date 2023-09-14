const express = require('express');
const orderRouter = express.Router();
const authUser = require('../middlewares/authUser');

const addOrder = require('../controllers/orders/addOrder');
const confirmOrder = require('../controllers/orders/confirmOrder');

orderRouter.post('/user/:idProduct', authUser, addOrder);
orderRouter.put('/user/confirm/:idProduct', authUser, confirmOrder);

module.exports = orderRouter;
