import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          validate: {
            validator: function (value) {
              return Number.isInteger(value) && value > 0;
            },
            message: "Quantity must be a positive integer",
          },
        },
        priceAtPurchase: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "shipped", "delivered","canceled"],
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ["Cash on Delivery", "Stripe", "Razorpay"],
      default: "Cash on Delivery",
    },
    paymentStatus: {
      type: String,
      default: "pending",
      enum: ["pending", "completed", "failed"],
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;


