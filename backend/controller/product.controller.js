import Product from "../models/product.model.js";

// GET all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// CREATE product
export const createProduct = async (req, res) => {
    const productData = req.body;

    if (!productData.name || !productData.price || !productData.image) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    try {
        const newProduct = new Product(productData);
        await newProduct.save();

        res.status(201).json({
            success: true,
            data: newProduct
        });
    } catch (error) {
        console.error("Error saving product:", error.message);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// UPDATE product
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            updates,
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.json({
            success: true,
            data: updatedProduct
        });
    } catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// DELETE product
export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.json({
            success: true,
            message: "Product deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting product:", error.message);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};