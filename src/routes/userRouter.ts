import express from "express";
import { UserController } from "../interfaces/http/controllers";
import { RouteControllerAdapter } from "../infra/core/http/RouteControllerAdapter";

const userRouter = express.Router();
const controller = new UserController();

userRouter.post("/", RouteControllerAdapter(controller, controller.createUser));
userRouter.get("/", RouteControllerAdapter(controller, controller.getUsers));
userRouter.put("/edit/:id", RouteControllerAdapter(controller, controller.editUser));
userRouter.delete("/delete/:id", RouteControllerAdapter(controller, controller.deleteUser));

export default userRouter;
