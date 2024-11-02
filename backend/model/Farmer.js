import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

const farmerSchema = new mongoose.Schema({
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
  location: {
    type: String,
    required: [true, "Please enter your location"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter your phone number"],
    validate: {
      validator: function (value) {
        return /^[6-9]\d{9}$/.test(value);
      },
      message: "Please enter a valid phone number",
    },
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "approved"],
  },
});

// Encrypting password before saving
farmerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcryptjs.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

// Password comparison method
farmerSchema.methods.compairePassword = async function (candidatePassword) {
  return await bcryptjs.compare(candidatePassword, this.password);
};

const Farmer = mongoose.models.Farmer || mongoose.model("Farmer", farmerSchema);
export default Farmer;
