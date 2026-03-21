import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productroute from "./routes/product.route.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/products", productroute);

// connect DB
connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});