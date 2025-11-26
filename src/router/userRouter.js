const { Router } = require("express");
const createUserHandler = require("../Handler/userHandlers/createUserHandler");
const loginUserHandler = require("../Handler/userHandlers/loginUserHandler");
const updateUserHandler = require("../Handler/userHandlers/updateUserHandler");
const getUserHandler = require("../Handler/userHandlers/getUserHandler");

const userRouter = Router();

userRouter.post("/create", createUserHandler);
userRouter.post("/login", loginUserHandler);
userRouter.put("/update", updateUserHandler);
userRouter.get("/", getUserHandler);

module.exports = userRouter;