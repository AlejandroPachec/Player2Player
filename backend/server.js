// IMPORTS FROM NODE_MODULES
const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');

app.use(express.json());


// Routers
app.use('/user', userRouter);

const { PORT } = process.env;

// Other errors
app.use((error, req, res, next) => {
    const errorCode = error.statusCode ?? 500;

    res.status(errorCode).send({
        error: error.message
    });
});

// Middleware for 404 errors
app.use((res, req) => {
    res.status(404).send({
        message: '¡No encontrado!'
    });
});

app.listen(5002, () => {
    console.log(`Server listening at http://localhost:${PORT}...`);
});
