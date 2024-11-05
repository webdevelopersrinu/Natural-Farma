import express from "express";
import {
  allOrders,
  getUserOrders,
  OrderApiWorking,
  placeOrder,
  updateOrderStatus,
} from "../controller/orderControllere.js";
import userAuth from "../middleware/userAuth.js";
import adminAuth from "../middleware/adminAuth.js";

const orderRoute = express.Router();
orderRoute.route("/").get(OrderApiWorking);
orderRoute.route("/place-order").post(userAuth, placeOrder);
orderRoute.route("/get-user-orders").get(userAuth, getUserOrders);
orderRoute.route("/update-order-status").patch(adminAuth, updateOrderStatus);
orderRoute.route("/all-orders").get(adminAuth, allOrders);
export default orderRoute;

