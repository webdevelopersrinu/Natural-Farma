import Product from "../model/Product.js";
import asyncError from "../utils/asyncError.js";
import CustomError from "../utils/customeError.js";
import { v2 as cloudinary } from "cloudinary";

export const productApiWorking = asyncError(async (req, res, next) => {
  res.status(200).send("product api is working...");
});
export const addProduct = asyncError(async (req, res, next) => {
  const {
    title,
    category,
    price,
    quarterKg,
    halfKg,
    pricePerKg,
    discountPrice,
    description,
  } = req.body;

  // Check if an image file is included in the request
  if (!req.file) {
    return next(new CustomError("Please upload an image for the product", 400));
  }

  // Upload image to Cloudinary
  const result = await cloudinary.uploader.upload(req.file.path, {
    resource_type: "image",
  });

  const newProduct = await Product.create({
    farmerId: req.farmerId,
    image: result.secure_url,
    title,
    category,
    price,
    quarterKg,
    halfKg,
    pricePerKg,
    discountPrice,
    farmerName: req.name,
    description,
  });

  res.status(201).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
});

export const getProducts = asyncError(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});
