// backend/routes/orderRoutes.js
import express from "express";
import Order from "../models/Order.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create order
router.post("/", protect, async (req, res) => {
  const { orderItems, shippingAddress, totalPrice } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ message: "No order items" });
  }

  const order = await Order.create({
    user: req.user._id,
    orderItems,
    shippingAddress,
    totalPrice,
  });

  res.status(201).json(order);
});

// Get logged-in user's orders
router.get("/my", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate("orderItems.product");
  res.json(orders);
});

export default router;
