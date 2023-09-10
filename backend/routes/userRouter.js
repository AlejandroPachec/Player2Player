const express = require('express');
const userRouter = express.Router();

const createUser = require('../controllers/users/createUser');
const loginUser = require('../controllers/users/loginUser');

userRouter.post('/create', createUser);
userRouter.post('/login', loginUser);

module.exports = userRouter;
