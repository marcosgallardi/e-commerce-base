const { Router } = require("express");

const userRouter = Router();

userRouter.post("/create", createUserHandler);
userRouter.post("/login", loginUserHandler);
userRouter.put("/update", updateUserHandler);
userRouter.get("/", getUserHandler);

module.exports = userRouter;