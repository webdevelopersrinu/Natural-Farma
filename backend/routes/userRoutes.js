import express from "express";
import {
  login,
  register,
  userApiWorking,
} from "../controller/userControllere.js";
import userAuth from "../middleware/userAuth.js";

const userRoute = express.Router();
userRoute.route("/").get(userApiWorking);
userRoute.route("/register").post(register);
userRoute.route("/login").post(login);
userRoute.route("/order").post(userAuth);

export default userRoute;
