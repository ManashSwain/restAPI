require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Hey I am live now!");
});

// Middlewares

app.use(express.json());
app.use("/api/products", product_routes);

const start = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
