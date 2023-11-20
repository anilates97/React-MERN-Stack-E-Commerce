const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon");

// Yeni bir kupon oluşturma
router.post("/", async (req, res) => {
  try {
    const { code } = req.body;
    const existingCoupon = await Coupon.findOne({ code });
    if (existingCoupon)
      return res.status(400).json({ error: "This coupon is already exists" });

    const newCoupon = new Coupon(req.body);
    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (err) {
    res.status(500).json({ error: "Server fetchAll error" });
  }
});

// Tüm kuponları getirme (Read - All)

router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (err) {
    res.status(500).json({ error: "Server fetchAll error" });
  }
});

// Id 'ye göre koponu getirme (Read - Single)

router.get("/:couponId", async (req, res) => {
  try {
    const { couponId } = req.params;
    const coupon = await Coupon.findById(couponId);

    if (!coupon) {
      const error = new Error("Coupon not found");
      error.statusCode = 404;
      throw error;
    } else {
      res.status(200).json(coupon);
    }
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});

// kupon koduna göre koponu getirme (Read - Single)

router.get("/code/:couponCode", async (req, res) => {
  try {
    const { couponCode } = req.params;
    const coupon = await Coupon.findOne({ code: couponCode });

    if (!coupon) {
      const error = new Error("Coupon not found");
      error.statusCode = 404;
      throw error;
    } else {
      res.status(200).json(coupon);
    }
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});

// Kupon güncelleme (Update)
router.put("/:couponId", async (req, res) => {
  try {
    const { couponId } = req.params;
    const updates = req.body;

    const existingCoupon = await Coupon.findById(couponId);

    if (!existingCoupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }

    const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updates, {
      new: true,
    });
    res.status(200).json(updatedCoupon);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});

// Kupon silme (Delete)
router.delete("/:couponId", async (req, res) => {
  try {
    const { couponId } = req.params;
    const deletedCoupon = await Coupon.findByIdAndDelete(couponId);

    if (!deletedCoupon)
      return res.status(404).json({ error: "Coupon not found" });

    res.status(200).json(deletedCoupon);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
});

module.exports = router;
