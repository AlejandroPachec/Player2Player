const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const { PORT } = require('./config'); 

const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productRouter');
const ordersRouter = require('./routes/ordersRouter');
const reviewsRouter = require('./routes/reviewsRouter');

app.use(express.urlencoded({ extended: false, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));

app.use(express.json());
app.use(fileUpload());

app.use('/user', userRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/reviews', reviewsRouter);

app.use((error, req, res, next) => {
    const errorCode = error.statusCode ?? 500;

    res.status(errorCode).send({
        error: error.message
    });
});

app.use((req, res) => {
    res.status(404).send({
        message: '¡No encontrado!'
    });
});

app.listen(5002, () => {
    console.log(`Server listening at http://localhost:${PORT}...`);
});
