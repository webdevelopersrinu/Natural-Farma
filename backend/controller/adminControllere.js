import asyncError from "../utils/asyncError.js";
import Admin from "../model/Admin.js";
import JWT from "jsonwebtoken";
import CustomError from "../utils/customeError.js";
import Farmer from "../model/Farmer.js";
import Product from "../model/Product.js";

export const adminApiWorking = asyncError(async (req, res, next) => {
  res.status(200).send("admin api is working...");
});

export const registerAdmin = asyncError(async (req, res, next) => {
  const { adminScreteKey } = req.body;
  if (!adminScreteKey) {
    return next(new CustomError("Enter admin screte key login", 400));
  }
  if (adminScreteKey !== process.env.ADMIN_SCRETE_KEY) {
    return next(new CustomError("Invalid admin screte key", 400));
  }
  const newAdmin = await Admin.create(req.body);
  const token = JWT.sign({ id: newAdmin.id }, process.env.ADMIN_SCRETE_STR, {
    expiresIn: process.env.LOGIN_EXPAIER,
  });
  res.status(201).json({
    status: "success",
    token,
  });
});

export const loginAdmin = asyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    let err = new CustomError("Please enter both email and password!", 400);
    return next(err);
  }
  const isAdmin = await Admin.findOne({ email });
  if (!isAdmin) {
    let err = new CustomError("Admin not found with this email", 404);
    return next(err);
  }
  const isMatch = await isAdmin.compairePassword(password);
  if (!isMatch) {
    let err = new CustomError("Invalid password", 400);
    return next(err);
  }
  const token = JWT.sign({ id: isAdmin.id }, process.env.ADMIN_SCRETE_STR, {
    expiresIn: process.env.LOGIN_EXPAIER,
  });
  res.status(200).json({
    status: "success",
    token,
  });
});

// un approne farmer data
export const unApproveFarmer = asyncError(async (req, res, next) => {
  const farmers = await Farmer.find({ status: "pending" });
  res.status(200).json({
    status: "success",
    results: farmers.length,
    farmers,
  });
});

// unApproveProducts list
export const unApproveProducts = asyncError(async (req, res, next) => {
  const products = await Product.find({ isVisible: false });
  res.status(200).json({
    status: "success",
    results: products.length,
    products,
  });
});

// approveFarmer
export const approveFarmer = asyncError(async (req, res, next) => {
  const { farmerId } = req.params;
  const farmer = await Farmer.findById(farmerId);
  if (!farmer) {
    return next(new CustomError("Farmer not found", 404));
  }
  if (farmer.status === "approved") {
    return next(new CustomError("Farmer is already approved", 400));
  }
  farmer.status = "approved";
  await farmer.save({ validateBeforeSave: false });
  res.status(200).json({
    status: "success",
    message: `Farmer with name ${farmer.name} has been approved`,
  });
});

// approveProduct
export const approveProduct = asyncError(async (req, res, next) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  if (!product) {
    return next(new CustomError("Product not found", 404));
  }
  if (product.isVisible === true) {
    return next(new CustomError("Product is already approved", 400));
  }
  product.isVisible = true;
  await product.save({ validateBeforeSave: false });
  res.status(200).json({
    status: "success",
    message: `product with ID ${product.id} has been approved`,
    product,
  });
});

// all farmers list
export const allFarmerList = asyncError(async (req, res, next) => {
  const allFarmers = await Farmer.find();
  res.status(200).json({
    status: "success",
    results: allFarmers.length,
    allFarmers,
  });
});

// all products list
export const allProductsList = asyncError(async (req, res, next) => {
  const allProducts = await Product.find();
  res.status(200).json({
    status: "success",
    results: allProducts.length,
    allProducts,
  });
});
