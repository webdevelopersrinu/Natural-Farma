import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email"],
      index: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      validate: [validator.isStrongPassword, "Please enter a strong password"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Passwords do not match",
      },
    },
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

// Encrypting password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcryptjs.hash(this.password, 12);
  } catch (err) {
    return next(err); // Pass the error to the error handler
  }
  this.confirmPassword = undefined;
  next();
});

// Password comparison method
userSchema.methods.compairePassword = async function (candidatePassword) {
  return await bcryptjs.compare(candidatePassword, this.password);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
