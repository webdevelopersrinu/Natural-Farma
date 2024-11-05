import express from "express";
import userAuth from "../middleware/userAuth.js";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../controller/wishlistController.js";

const wishlistRoute = express.Router();
wishlistRoute.route("/add").post(userAuth, addToWishlist);
wishlistRoute.route("/remove").delete(userAuth, removeFromWishlist);
wishlistRoute.route("/get").get(userAuth, getWishlist);

export default wishlistRoute;

