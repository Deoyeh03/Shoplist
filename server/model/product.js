const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        // required: true
    },
    updated_at: {
        type: String,
        // required: true
    }
});
module.exports = mongoose.model('product', productSchema);



