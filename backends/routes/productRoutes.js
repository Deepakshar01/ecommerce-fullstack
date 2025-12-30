import express from "express";
import Product from "../models/Product.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// CREATE product (only admin)
router.post("/", protect, admin, async (req, res) => {
  try {
    const { name, price, description, image, category, countInStock } = req.body;

    const product = await Product.create({
      name,
      price,
      description,
      image,
      category,
      countInStock,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to create product" });
  }
});

export default router;
