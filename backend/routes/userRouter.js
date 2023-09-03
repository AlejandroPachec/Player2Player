const express = require('express');
const userRouter = express.Router();

const createUser = require('../controllers/createUser');

userRouter.post('create', createUser);

module.exports = userRouter;
