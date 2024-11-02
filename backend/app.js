import express from "express";
import cros from "cors";
import xss from "xss-clean";
import helmet from "helmet";
import morgan from "morgan";
import sanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import globalErrorHandeler from "./utils/globalErrorHandeler.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoute from "./routes/userRoutes.js";
import farmerRoute from "./routes/farmerRoutes.js";
import adminRoute from "./routes/adminRoutes.js";
import productRoute from "./routes/productRoutes.js";
import orderRoute from "./routes/orderRoutes.js";
import CustomError from "./utils/customeError.js";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cros());
app.use(helmet());
app.use(sanitize());
app.use(xss());
app.use(morgan("dev"));
// rate limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }); // 100 requests per 15 minutes
app.use(limiter);

connectCloudinary();

app.get("/", (req, res) => {
  res.status(200).send("welcome to natural farms");
});

app.use("/api/users", userRoute);
app.use("/api/farmers", farmerRoute);
app.use("/api/admin", adminRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.all("*", (req, res, next) => {
  let err = new CustomError(`this page ${req.originalUrl} is not found!`, 404);
  next(err);
});

app.use(globalErrorHandeler);

export default app;
