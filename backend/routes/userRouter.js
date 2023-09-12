const express = require('express');
const userRouter = express.Router();

const createUser = require('../controllers/users/createUser');
const activateUser = require('../controllers/users/activateUser');
const loginUser = require('../controllers/users/loginUser');
const getUser = require('../controllers/users/getUser');

userRouter.post('/create', createUser);
userRouter.get('/activate/:registrationCode', activateUser);
userRouter.post('/login', loginUser);
userRouter.get('/profile/:userId', getUser);

module.exports = userRouter;
