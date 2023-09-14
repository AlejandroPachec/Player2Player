// IMPORTS FROM NODE_MODULES
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productRouter');
const ordersRouter = require('./routes/ordersRouter');

app.use(express.json());
app.use(fileUpload());

// Routers
app.use('/user', userRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

const { PORT } = process.env;

// Other errors
app.use((error, req, res, next) => {
    const errorCode = error.statusCode ?? 500;

    res.status(errorCode).send({
        error: error.message
    });
});

// Middleware for 404 errors
app.use((req, res) => {
    res.status(404).send({
        message: '¡No encontrado!'
    });
});

app.listen(5002, () => {
    console.log(`Server listening at http://localhost:${PORT}...`);
});
