import user from "../model/User.js";
import asyncError from "../utils/asyncError.js";
import JWT from "jsonwebtoken";
import CustomError from "../utils/customeError.js";

export const userApiWorking = asyncError(async (req, res, next) => {
  res.status(200).send("user api is working...");
});
// resgister
export const register = asyncError(async (req, res, next) => {
  const userData = await user.create(req.body);
  const token = JWT.sign({ id: userData.id }, process.env.USER_SCRETE_STR, {
    expiresIn: process.env.LOGIN_EXPAIER,
  });
  res.status(200).json({
    status: "success",
    token,
  });
});
// login
export const login = asyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    let err = new CustomError("Please enter your email and password!", 400);
    return next(err);
  }
  const isUser = await user.findOne({ email });
  if (!isUser) {
    let err = new CustomError("User not found with this email", 404);
    return next(err);
  }
  const isPasswordMatch = await isUser.compairePassword(password);
  if (!isPasswordMatch) {
    let err = new CustomError("Incorrect password!", 400);
    return next(err);
  }
  const token = JWT.sign({ id: isUser.id }, process.env.USER_SCRETE_STR, {
    expiresIn: process.env.LOGIN_EXPAIER,
  });
  res.status(200).json({
    status: "success",
    token,
  });
});
