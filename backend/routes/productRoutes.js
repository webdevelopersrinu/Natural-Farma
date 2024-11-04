import express from "express";
import {
  addProduct,
  getProducts,
  productApiWorking,
} from "../controller/productControllere.js";
import farmerAuth from "../middleware/farmerAuth.js";
import upload from "../middleware/multer.js";

const productRoute = express.Router();
productRoute.route("/").get(productApiWorking);

productRoute.route("/add").post(farmerAuth, upload.single("image"), addProduct);
productRoute.route("/get-product").get(getProducts);
export default productRoute;
