const express = require("express");
const router = express.Router();

// Diğer rota dosyalalarını içe aktarıyoruz

const productRoute = require("./products");
const categoryRoute = require("./categories");

// Her rotayı ilgili yol altında kullanıyoruz

router.use("/categories", categoryRoute);
router.use("/products", productRoute);

module.exports = router;
