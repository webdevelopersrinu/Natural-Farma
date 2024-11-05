import Product from "../model/Product.js";
import User from "../model/User.js";
import asyncError from "../utils/asyncError.js";
import CustomError from "../utils/customeError.js";

export const addToWishlist = asyncError(async (req, res, next) => {
  const { userId } = req;
  const { productId } = req.body;
  const product = await Product.findById(productId);
  if (!product) {
    return next(new CustomError("Product not found", 404));
  }
  const user = await User.findById(userId);
  if (!user) {
    return next(new CustomError("User not found", 404));
  }
  if (user.wishlist.includes(productId)) {
    return next(new CustomError("Product already in wishlist", 400));
  }
  user.wishlist.push(productId);
  await user.save({ validateBeforeSave: false });
  res.status(200).json({
    status: "success",
    message: "Product added to wishlist",
    whitelist: user.whitelist,
  });
});

export const removeFromWishlist = asyncError(async (req, res, next) => {
  const { userId } = req;
  const { productId } = req.body;
  const user = await User.findById(userId);
  if (!user) {
    return next(new CustomError("User not found", 404));
  }
  if (!user.wishlist.includes(productId)) {
    return next(new CustomError("Product not in wishlist", 400));
  }
  user.wishlist = user.wishlist.filter((id) => id.toString() !== productId);
  await user.save({ validateBeforeSave: false });
  res.status(200).json({
    status: "success",
    message: "Product removed from wishlist",
    whitelist: user.whitelist,
  });
});

export const getWishlist = asyncError(async (req, res, next) => {
  const { userId } = req;
  const user = await User.findById(userId).populate("wishlist");
  if (!user) {
    return next(new CustomError("User not found", 404));
  }
  res.status(200).json({
    status: "success",
    results: user.wishlist.length,
    wishlist: user.wishlist,
  });
});


