const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productFeatures: {
    type: [String],
    required: true,
  },
  productColors: {
    type: [String],
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;