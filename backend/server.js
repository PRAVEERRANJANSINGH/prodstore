import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productroute from "./routes/product.route.js";
import path from "path";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/products", productroute);

// connect DB


const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
  });
}




connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
