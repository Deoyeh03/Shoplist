const productRepo = require('../repositories/productRepo');

class productService {
    async getAllProduct() {
        return productRepo.findAll();
    }


    async getProductById() {
        const product = await productRepo.findById(id);
        if (!productName) throw new Error('product not found');
        return product;
    }
    
    
    async createProduct(data) {
        const {productName, price, description, sku, quantity} = data;
        if (!productName || !price || !description || !sku || !quantity) {
            throw new Error('Name and Price are required');
        }
        const newProduct = await productRepo.create({
            productName,
            price,
            description,
            sku,
            quantity
        });
        return newProduct;
    }

    async updateProduct(id, data) {
        const updated = await productRepo.update(id, data);
        if(!updated) throw new Error('Product not found');
        return updated;
    }
    async deleteProduct(id, data) {
        const updated = await productRepo.delete(id);
        if(!deleted) throw new Error('Product not found');
        return deleted;
    }
};

module.exports = new productService();