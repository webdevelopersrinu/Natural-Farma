import express from "express";
import { OrderApiWorking } from "../controller/orderControllere.js";

const orderRoute = express.Router();
orderRoute.route("/").get(OrderApiWorking);

export default orderRoute;
