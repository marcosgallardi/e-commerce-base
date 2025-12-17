const { Router } = require("express");
const getOrdHandler = require("../Handler/ordHandlers/getOrdHandler");
const createOrdHandler = require("../Handler/ordHandlers/createOrdHandler");
const updateOrdHandler = require("../Handler/ordHandlers/updateOrdHandler");
const deleteOrdHandler = require("../Handler/ordHandlers/deleteOrdHandler");
const ordRouter = Router();



ordRouter.post("/create", createOrdHandler)
ordRouter.put("/update", updateOrdHandler)
ordRouter.delete("/delete/:id", deleteOrdHandler)
ordRouter.get("/", getOrdHandler)

module.exports = ordRouter;

