import asyncError from "../utils/asyncError.js";
import Admin from "../model/Admin.js";
import JWT from "jsonwebtoken";
import CustomError from "../utils/customeError.js";
import Farmer from "../model/Farmer.js";

export const adminApiWorking = asyncError(async (req, res, next) => {
  res.status(200).send("admin api is working...");
});

export const registerAdmin = asyncError(async (req, res, next) => {
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
