const express = require("express");
const app = express();
require("dotenv").config();
const getPool = require("./db/connectDB");

const fs = require("fs/promises");
const productsRouter = require("./routes/productsRouter");
app.use(express.json());

app.use("/products", productsRouter);

app.use(async (error, req, res, next) => {
  const errorCode = error.code || 500;

  console.log(error.message);

  res.status(errorCode).send({
    ok: false,
    data: null,
    error: error.message,
    message: null,
  });
});

app.use((req, res) => {
  res.status(404).send({
    ok: false,
    data: null,
    error: null,
    message: "Doesn't exist",
  });
});

const PORT = 5100;

app.listen(PORT, () => {
  console.log(`Escuchando el puerto ${PORT}...`);
});
