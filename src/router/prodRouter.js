const { Router } = require("express");
const createProdHandler = require("../Handler/prodHandlers/createProdHandler");
const updateProdHandler = require("../Handler/prodHandlers/updateProdHandler");
const deleteProdHandler = require("../Handler/prodHandlers/deleteProdHandler");
const getProdHandler = require("../Handler/prodHandlers/getProdHandler");

const prodRouter = Router();

prodRouter.post("/create", createProdHandler)
prodRouter.put("/update", updateProdHandler)
prodRouter.delete("/delete", deleteProdHandler)
prodRouter.get("/", getProdHandler)

module.exports = prodRouter;