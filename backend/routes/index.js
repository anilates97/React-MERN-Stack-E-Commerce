const express = require("express");
const router = express.Router();

// Diğer rota dosyalalarını içe aktarıyoruz

const productRoute = require("./products");
const categoryRoute = require("./categories");
const authRoute = require("./auth");

// Her rotayı ilgili yol altında kullanıyoruz

router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/auth", authRoute);

module.exports = router;
