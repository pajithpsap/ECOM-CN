// controllers/productController.js
import { Product } from "../model/product.schema.js";

export default class ProductController {
  async addProduct(req, res) {
    try {
      const { name, quantity } = req.body;
      const product = new Product({ name, quantity });
      await product.save();
      res.status(201).json({ product, msg: "product added" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Controller for updating a product
  async updateProduct(req, res) {
    try {
      const productId = req.params.id;
      const { quantity } = req.body;
      const product = await Product.findByIdAndUpdate(
        productId,
        { quantity },
        { new: true }
      );
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res
        .status(200)
        .json({ product, msg: "product quantity updated successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      const productId = req.params.id;
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Controller for getting all products
  async getAllProducts(req, res) {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
