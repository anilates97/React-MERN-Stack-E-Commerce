const express = require("express");
const router = express.Router();

// Diğer rota dosyalalarını içe aktarıyoruz

const productRoute = require("./products");
const categoryRoute = require("./categories");
const authRoute = require("./auth");
const couponRoute = require("./coupons");
const userRoute = require("./users");
const paymentRoute = require("./payment");

// Her rotayı ilgili yol altında kullanıyoruz

router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/auth", authRoute);
router.use("/coupons", couponRoute);
router.use("/users", userRoute);
router.use("/payment", paymentRoute);

module.exports = router;
