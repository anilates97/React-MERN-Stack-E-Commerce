const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("morgan");
const app = express();
const mainRoute = require("./routes/index");
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDb");
  } catch (err) {
    throw new Error(err);
  }
};

app.listen(5000, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});

// middlewares

app.use(logger("dev"));
app.use(express.json());

app.use("/api", mainRoute);

// "/api/products"
