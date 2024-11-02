import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmer",
      required: true,
    },
    image: {
      type: String,
      required: [true, "Please provide an image URL for the product"],
    },
    title: {
      type: String,
      required: [true, "Please provide a title for the product"],
    },
    category: {
      type: String,
      required: [true, "Please specify a category for the product"],
      enum: [
        "Raices",
        "Fruits",
        "Vegetables",
        "Oils",
        "Pulses",
        "Batani",
        "Nuts",
        "Dry Fruits",
        "Others",
      ],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for the product"],
    },
    discount: {
      type: Number,
      default: 0,
    },
    quarterKg: {
      type: Number,
      required: [true, "Please provide a price for a quarter kg"],
    },
    halfKg: {
      type: Number,
      required: [true, "Please provide a price for half kg"],
    },
    pricePerKg: {
      type: Number,
      required: [true, "Please provide a price per kg"],
    },
    quantity: {
      type: Number,
      default: 1,
    },
    discountPrice: {
      type: Number,
      required: [true, "Please provide a discounted price"],
    },
    availability: {
      type: String,
      enum: ["Available", "Out Of Stock"],
      default: "Available",
    },
    farmerName: {
      type: String,
      required: [true, "Please provide the farmer's name"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for the product"],
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
