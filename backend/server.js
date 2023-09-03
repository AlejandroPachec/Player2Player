// IMPORTS FROM NODE_MODULES
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
// Routers
const userRouter = require('./routes/userRouter');




app.use('/user', userRouter);

app.listen(5002 , () => {
    console.log('Escuchando el puerto ...');
});
