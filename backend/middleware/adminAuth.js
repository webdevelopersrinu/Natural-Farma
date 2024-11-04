import JWT from "jsonwebtoken";
import asyncError from "../utils/asyncError.js";
import CustomError from "../utils/customeError.js";
import Admin from "../model/Admin.js";

const adminAuth = asyncError(async (req, res, next) => {
  let testToken = req.headers.authorization;
  let token;
  if (testToken && testToken.startsWith("Bearer")) {
    token = testToken.split(" ")[1];
  }
  token = token === "null" ? null : token;
  if (!token) {
    let err = new CustomError(
      "Please log in to access your account and view the information.",
      401
    );
    return next(err);
  }
  let decodeToken = JWT.verify(token, process.env.ADMIN_SCRETE_STR);
  const isAdmin = await Admin.findById(decodeToken.id);
  if (!isAdmin) {
    return next(new CustomError("Please log in to access.",404));
  }
  req.adminId = isAdmin._id;
  // res.status(200).send("hello..........");
  next();
});

export default adminAuth;
