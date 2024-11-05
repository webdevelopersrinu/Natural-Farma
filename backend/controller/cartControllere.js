import Cart from "../model/Cart.js";
import Product from "../model/Product.js";
import asyncError from "../utils/asyncError.js";
import CustomError from "../utils/customeError.js";

export const addToCart = asyncError(async (req, res, nxet) => {
  const { productId, quantity = 1 } = req.body;
  const { userId } = req;
  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }
  const itemIndex = cart.items.findIndex((item) =>
    item.productId.equals(productId)
  );
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  await cart.save();
  res.status(200).json({
    status: "success",
    message: "Product added to cart",
  });
});

export const removeFromCart = asyncError(async (req, res, next) => {
  const { userId } = req;
  const { productId } = req.body;
  const cart = await Cart.findOne({ userId });
  if (!cart) {
    return next(new CustomError("Cart not found"), 404);
  }
  cart.items = cart.items.filter((item) => !item.productId.equals(productId));
  await cart.save();
  res.status(200).json({
    status: "success",
    message: "Product removed from cart",
  });
});

export const increaseQuantity = asyncError(async (req, res, next) => {
  const { userId } = req;
  const { productId } = req.body;
  const cart = await Cart.findOne({ userId });
  if (!cart) {
    return next(new CustomError("Cart not found"), 404);
  }
  const itemIndex = cart.items.findIndex((item) =>
    item.productId.equals(productId)
  );
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += 1;
  } else {
    return next(new CustomError("Product not found in cart", 404));
  }
  await cart.save();
  res.status(200).json({
    status: "success",
    message: "Product quantity increased",
  });
});

export const decreaseQuantity = asyncError(async (req, res, next) => {
  const { userId } = req;
  const { productId } = req.body;
  const cart = await Cart.findOne({ userId });
  if (!cart) {
    return next(new CustomError("Cart not found"), 404);
  }
  const itemIndex = cart.items.findIndex((item) =>
    item.productId.equals(productId)
  );
  if (itemIndex > -1) {
    if (cart.items[itemIndex].quantity > 1) {
      cart.items[itemIndex].quantity -= 1;
    } else {
      cart.items.splice(itemIndex, 1);
    }
  } else {
    return next(new CustomError("Product not found in cart", 404));
  }
  await cart.save();
  res.status(200).json({
    status: "success",
    message: "Product quantity decreased",
  });
});

export const getCartItems = asyncError(async (req, res, next) => {
  const { userId } = req;
  const cart = await Cart.find({ userId });
  if (!cart) {
    return next(new CustomError("Cart not found"), 404);
  }
  res.status(200).json({
    status: "success",
    results: cart[0].items.length,
    data: {
      cardItems: cart[0].items
    },
  });
});
