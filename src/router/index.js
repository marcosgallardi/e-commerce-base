const { Router } = require("express");


const catRouter = require("./catRouter")
const ordItemRouter = require("./ordItemRouter")
const ordRouter = require("./ordRouter")
const prodRouter = require("./prodRouter")
const userRouter = require("./userRouter")
const ticketRouter = require("./ticketRouter")

const router = Router();


router.use("/users", userRouter);
router.use("/product", prodRouter);
router.use("/order", ordRouter);
router.use("/ticket", ticketRouter);
router.use("/itemsOrder", ordItemRouter);
router.use("/categories", catRouter);

module.exports = router;