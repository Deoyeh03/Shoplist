const express = require('express');
const productController = require('../controller/product');

const route = express.Router();

// GET /api/product - Get all product
route.get('/', productController.getAllProduct);

// GET /api/products/:id - Get product by ID
route.get('/:id', productController.getProductById);

// POST /api/products - Create new product
route.post('/', productController.createProduct);

// PUT /api/products/:id - Update product
route.put('/:id', productController.updateProduct);

// DELETE /api/product/:id - Delete product
route.delete('/:id', productController.deleteProduct);

module.exports = route;