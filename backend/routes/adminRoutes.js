import express from "express";
import {
  adminApiWorking,
  approveFarmer,
  loginAdmin,
  registerAdmin,
} from "../controller/adminControllere.js";
import adminAuth from "../middleware/adminAuth.js";

const adminRoute = express.Router();
adminRoute.route("/").get(adminApiWorking);
adminRoute.route("/register").post(registerAdmin);
adminRoute.route("/login").post(loginAdmin);
adminRoute.route("/auth").post(adminAuth);
adminRoute.patch("/approve-farmer/:farmerId", adminAuth, approveFarmer);

export default adminRoute;
