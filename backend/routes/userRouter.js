const express = require('express');
const userRouter = express.Router();

const createUser = require('../controllers/createUser');
const loginUser = require('../controllers/loginUser');

userRouter.post('/create', createUser);
userRouter.post('/login', loginUser);

module.exports = userRouter;
