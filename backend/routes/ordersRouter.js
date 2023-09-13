const express = require('express');
const orderRouter = express.Router();
const authUser = require('../middlewares/authUser');

const addOrder = require('../controllers/orders/addOrder');


orderRouter.post('/user/:idProduct', authUser, addOrder);

module.exports = orderRouter;
