const { Router } = require("express");
const updateCatHandler = require("../Handler/catHandlers/updateCatHandler");
const getCatHandler = require("../Handler/catHandlers/getCatHandler");
const deteleCatHandler = require("../Handler/catHandlers/deteleCatHandler");
const createCatHandler = require("../Handler/catHandlers/createCatHandler");



const catRouter = Router();

catRouter.post("/create", createCatHandler);
catRouter.put("/update", updateCatHandler);
catRouter.get("/", getCatHandler);
catRouter.delete("/delete", deteleCatHandler);

module.exports = catRouter;