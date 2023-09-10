const express = require('express');
const userRouter = express.Router();

const createUser = require('../controllers/users/createUser');
const loginUser = require('../controllers/users/loginUser');
const getUser = require('../controllers/users/getUser');

userRouter.post('/create', createUser);
userRouter.post('/login', loginUser);
userRouter.get('/profile/:userId', getUser);

module.exports = userRouter;
