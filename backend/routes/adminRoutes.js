import express from "express";
import {
  adminApiWorking,
  allFarmerList,
  allProductsList,
  approveFarmer,
  approveProduct,
  loginAdmin,
  registerAdmin,
  unApproveFarmer,
  unApproveProducts,
} from "../controller/adminControllere.js";
import adminAuth from "../middleware/adminAuth.js";
import { productsByFarmer } from "../controller/productControllere.js";

const adminRoute = express.Router();
adminRoute.route("/").get(adminApiWorking);
adminRoute.route("/register").post(registerAdmin);
adminRoute.route("/login").post(loginAdmin);
adminRoute.route("/auth").post(adminAuth);
adminRoute.route("/approve-farmer/:farmerId").patch(adminAuth, approveFarmer);
adminRoute
  .route("/approve-product/:productId")
  .patch(adminAuth, approveProduct);
adminRoute.route("/un-approve-farmer").get(adminAuth, unApproveFarmer);
adminRoute.route("/un-approve-products").get(adminAuth, unApproveProducts);
adminRoute.route("/product-list/:farmerId").get(adminAuth, productsByFarmer);
adminRoute.route("/all-products").get(adminAuth, allProductsList);
adminRoute.route("/all-farmers").get(adminAuth, allFarmerList);

export default adminRoute;
