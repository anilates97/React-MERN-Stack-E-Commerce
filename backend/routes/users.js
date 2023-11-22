const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Tüm kullanıcıları getirme
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Server fetchAll error" });
  }
});

// User silme (Delete)
router.delete("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const deletedUser = await User.findOneAndDelete({ email });

    if (!deletedUser) return res.status(404).json({ error: "User not found" });

    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});

module.exports = router;
