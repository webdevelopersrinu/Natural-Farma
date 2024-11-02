import asyncError from "../utils/asyncError.js";
import CustomError from "../utils/customeError.js";
import Order from "../model/Order.js";
import Cart from "../model/Cart.js";
import Product from "../model/Product.js";

// Order API Check
export const OrderApiWorking = asyncError(async (req, res, next) => {
  res.status(200).send("Order API is working...");
});

// Checkout Functionality
export const checkout = asyncError(async (req, res, next) => {
  const { userId } = req.body;
  const cart = await Cart.findOne({ userId }).populate("items.productId");
  
  if (!cart || cart.items.length === 0) {
    return next(new CustomError("Cart not found or empty", 400));
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

  const order = new Order({ userId, items, totalAmount });
  await order.save();
  await Cart.deleteOne({ userId }); 

  res.status(201).json({
    status: "success",
    order,
  });
});
