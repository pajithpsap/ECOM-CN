
import express from 'express';
import ProductController from '../controllers/product.controller.js';
const productrouter = express.Router();

const productController = new ProductController();
// Route for adding a product
productrouter.post('/products', (req,res)=>{
    productController.addProduct(req,res)
});

// Route for deleting a product
productrouter.get('/products', (req,res)=>{
    productController.getAllProducts(req,res)
});

// Route for updating a product
productrouter.put('/products/:id', (req,res)=>{
    productController.updateProduct(req,res)
});

// Route for deleting a product
productrouter.delete('/products/:id', (req,res)=>{
    productController.deleteProduct(req,res)
});



export default productrouter;