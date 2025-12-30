// backend/models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        name: String,
        qty: Number,
        price: Number,
      },
    ],
    shippingAddress: {
      address: String,
      city: String,
      phone: String,
    },
    totalPrice: Number,
    isPaid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
