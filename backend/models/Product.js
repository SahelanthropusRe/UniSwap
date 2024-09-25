// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    sellOrRent: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    dailyPrice: {
        type: Number,
    },
    rentalPeriod: {
        type: Number,
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('Product', productSchema);
