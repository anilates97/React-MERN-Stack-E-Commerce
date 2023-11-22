const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// Yeni bir kategori oluşturma
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;

    const newCategory = new Category({ name, img });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (err) {
    console.log(err);
  }
});

// Tüm kategorileri getirme (Read - All)

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: "Server fetchAll error" });
  }
});

// Id 'ye göre kategoriyi getirme (Read - Single)

router.get("/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);

    if (!category) {
      const error = new Error("Category not found");
      error.statusCode = 404;
      throw error;
    } else {
      res.status(200).json(category);
    }
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});

// Kategori güncelleme (Update)
router.put("/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;
    const updates = req.body;

    const existingCategory = await Category.findById(categoryId);

    if (!existingCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updates,
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});

// Kategori silme (Delete)
router.delete("/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory)
      return res.status(404).json({ error: "Category not found" });

    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});

module.exports = router;
