const productService = require('../services/productService');

class productController  {
    
    //Get all products
    async getAllProduct(req, res)  {
        try {
            const product = await productService.getAllProduct();
            res.json(product);
        } catch (error) {
            res.status(404).json({error: err.message});
        }
    }

    // Get products by ID
    async getProductById(req, res) {
        try {
            const product = await productService.getProductById(req.params.id);
            res.json(product);
        } catch (error) {
             res.status(400).json({error: err.message});
        }
    }

    // Create new product
    async createProduct(req, res) {
        try {
            const product = await productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
             res.status(404).json({error},);
        }
    }

    // Update product
    async updateProduct(req, res) {
        try {
            const product = await productService.updateProduct(req.params.id, req.body);
            res.json(product);
        } catch (err) {
            res.status(404).json({ error: err.message});
        }
    }

    // Delete product
    async deleteProduct(req, res) {
        try {
            await productService.deleteProduct(req.params.id);
            res.json({ message: 'Product deleted successfully'});
        } catch (err) {
            res.status(404).json({ error: err.message});
        }
    }
};

module.exports = new productController;