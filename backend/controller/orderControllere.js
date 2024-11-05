import asyncError from "../utils/asyncError.js";
import CustomError from "../utils/customeError.js";
import Order from "../model/Order.js";
import Cart from "../model/Cart.js";
import Product from "../model/Product.js";

// Order API Check
export const OrderApiWorking = asyncError(async (req, res, next) => {
  res.status(200).send("Order API is working...");
});

export const placeOrder = asyncError(async (req, res, next) => {
  const { paymentMethod, address, paymentStatus } = req.body;
  if (
    !address ||
    !address.street ||
    !address.city ||
    !address.state ||
    !address.zipCode ||
    !address.country
  ) {
    return next(
      new CustomError("Complete address information is required", 400)
    );
  }

  const { userId } = req;
  const cart = await Cart.findOne({ userId }).populate("items.productId");
  if (!cart || cart.items.length === 0) {
    return next(new CustomError("Your cart is empty", 400));
  }
  let totalAmount = 0;
  const items = cart.items.map((item) => {
    totalAmount += item.productId.price * item.quantity;
    return {
      productId: item.productId._id,
      quantity: item.quantity,
      priceAtPurchase: item.productId.price,
    };
  });
  const order = new Order({
    userId,
    items,
    totalAmount,
    paymentMethod,
    paymentStatus:
      paymentStatus || paymentMethod === "Cash on Delivery"
        ? "pending"
        : "processing",
    address,
  });
  await order.save();
  await Cart.deleteOne({ userId });
  res.status(201).json({
    status: "success",
    message: "Order placed successfully",
    order,
  });
});

export const getUserOrders = asyncError(async (req, res, next) => {
  const { userId } = req;
  const orders = await Order.find({ userId }).populate("items.productId");
  if (!orders) {
    return next(new CustomError("No orders found for this user", 404));
  }
  res.status(200).json({
    status: "success",
    results: orders.length,
    orders,
  });
});

export const updateOrderStatus = asyncError(async (req, res, next) => {
  const { orderId, newStatus } = req.body;
  const validStatuses = ["pending", "shipped", "delivered", "canceled"];
  if (!validStatuses.includes(newStatus)) {
    return next(new CustomError("Invalid status value", 400));
  }
  const order = await Order.findByIdAndUpdate(
    orderId,
    { status: newStatus },
    { new: true }
  );
  if (!order) {
    return next(new CustomError("Order not found", 404));
  }
  res.status(200).json({
    status: "success",
    message: "Order status updated successfully",
    order,
  });
});

export const allOrders = asyncError(async (req, res, next) => {
  const orders = await Order.find();
  res.status(200).json({
    status: "success",
    orders,
  });
});
