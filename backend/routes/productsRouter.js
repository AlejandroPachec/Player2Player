const express = require("express");
const productsRouter = express.Router();
const getPool = require("../db/connectDB");

productsRouter.get("/products", async (req, res, next) => {
  try {
    const results = await getPool(`
          SELECT name, description, stock
          FROM products;          
      `);

    res.send({
      ok: true,
      data: results,
      error: null,
      message: null,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = productsRouter;
