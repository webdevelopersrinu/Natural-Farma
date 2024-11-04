import JWT from "jsonwebtoken";
import asyncError from "../utils/asyncError.js";
import CustomError from "../utils/customeError.js";
import Farmer from "../model/Farmer.js";

const farmerAuth = asyncError(async (req, res, next) => {
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
  let decodeToken = JWT.verify(token, process.env.FARMER_SCRETE_STR);
  const isFarmer = await Farmer.findById(decodeToken.id);
  if (!isFarmer) {
    let err = new CustomError(
      "Farmer is not found Please log in to access your accoun",
      404
    );
    return next(err);
  }
  req.farmerId = isFarmer.id;
  req.name = isFarmer.name;
  // res.status(200).send("hello..........");
  next();
});

export default farmerAuth;
