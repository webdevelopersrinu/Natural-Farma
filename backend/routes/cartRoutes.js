import express from "express";
import userAuth from "../middleware/userAuth.js";
import {
  addToCart,
  decreaseQuantity,
  getCartItems,
  increaseQuantity,
  removeFromCart,
} from "../controller/cartControllere.js";

const cartRoute = express.Router();
cartRoute.route("/add-to-cart").post(userAuth, addToCart);
cartRoute.route("/remove-to-cart").delete(userAuth, removeFromCart);
cartRoute.route("/increase-quantity").patch(userAuth, increaseQuantity);
cartRoute.route("/decrease-quantity").patch(userAuth, decreaseQuantity);
cartRoute.route("/cart-items").get(userAuth, getCartItems);

export default cartRoute;
