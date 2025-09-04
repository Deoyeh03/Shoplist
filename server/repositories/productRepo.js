const product = require('../model/product');

class productRepo {
    async findAll() {
        return product.find();
    }

    async findById(id) {
        return product.findById(id);
    }

    async create(data) {
        return product.create(data);
    }

    async update(id, data) {
        return product.findByIdAndUpdate(id, data, {new:true});
    }

    async delete(data) {
        return product.findByIdAndDelete (id, data,{new:true});
    }
}

module.exports = new productRepo();