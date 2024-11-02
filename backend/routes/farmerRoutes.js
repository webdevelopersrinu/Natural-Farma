import express from "express";
import {
  farmerApiWorking,
  loginFarmer,
  registerFarmer,
} from "../controller/farmerControllere.js";
import farmerAuth from "../middleware/farmerAuth.js";

const farmerRoute = express.Router();
farmerRoute.route("/").get(farmerApiWorking);
farmerRoute.route("/login").post(loginFarmer);
farmerRoute.route("/register").post(registerFarmer);
farmerRoute.route("/auth").post(farmerAuth);


export default farmerRoute;
