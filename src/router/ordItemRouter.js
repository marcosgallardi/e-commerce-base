const { Router } = require("express");
const createOrdItemHandler = require("../Handler/ordItemHandlers/createOrdItemHandler");
const updateOrdItemHandler = require("../Handler/ordItemHandlers/updateOrdItemHandler");
const getOrdItemHandler = require("../Handler/ordItemHandlers/getOrdItemHandler");
const deleteOrdItemHandler = require("../Handler/ordItemHandlers/deleteOrdItemHandler");

const ordItemRouter = Router();

ordItemRouter.post("/create", createOrdItemHandler);
ordItemRouter.put("/update", updateOrdItemHandler);
ordItemRouter.get("/", getOrdItemHandler);
ordItemRouter.delete("/delete/:id", deleteOrdItemHandler);

module.exports = ordItemRouter;