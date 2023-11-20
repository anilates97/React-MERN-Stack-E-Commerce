const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Tüm ürünleri getirme (Read - All)

// Yeni bir product oluşturma
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (err) {
    console.log(err);
  }
});

// Tüm ürünleri getirme (Read - All)

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Server fetchAll error" });
  }
});

// Id 'ye göre product getirme (Read - Single)

router.get("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) return res.status(404).json({ error: "Product not found" });

    res.status(200).json(product);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});

// Product güncelleme (Update)
router.put("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const updates = req.body;

    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, {
      new: true,
    });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});

// Product silme (Delete)
router.delete("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct)
      return res.status(404).json({ error: "Product not found" });

    res.status(200).json(deletedProduct);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});

module.exports = router;
