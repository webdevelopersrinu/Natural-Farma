import asyncError from "../utils/asyncError.js";
import CustomError from "../utils/customeError.js";
import Farmer from "../model/Farmer.js";
import JWT from "jsonwebtoken";

export const farmerApiWorking = asyncError(async (req, res, next) => {
  res.status(200).send("farmer api is working...");
});

export const registerFarmer = asyncError(async (req, res, next) => {
  const newFarmer = await Farmer.create(req.body);
  const token = JWT.sign({ id: newFarmer.id }, process.env.FARMER_SCRETE_STR, {
    expiresIn: process.env.LOGIN_EXPAIER,
  });
  res.status(201).json({
    status: "success",
    token,
  });
});

export const loginFarmer = asyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    let err = new CustomError("Please enter both email and password!", 400);
    return next(err);
  }

  const isFarmer = await Farmer.findOne({ email });
  if (!isFarmer) {
    let err = new CustomError("Farmer not found with this email", 404);
    return next(err);
  }
  const isMatch = await isFarmer.compairePassword(password);
  if (!isMatch) {
    let err = new CustomError("Invalid password", 400);
    return next(err);
  }
  const token = JWT.sign({ id: isFarmer.id }, process.env.FARMER_SCRETE_STR, {
    expiresIn: process.env.LOGIN_EXPAIER,
  });
  res.status(200).json({
    status: "success",
    token,
  });
});
