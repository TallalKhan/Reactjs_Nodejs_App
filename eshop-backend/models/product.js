const mongoose = require('mongoose');
const Schema = mongoose .Schema;

const ObjectId = Schema.ObjectId;

// create schema

const ProductSchema = new Schema({
  productID : ObjectId,
  title: String,
  price: String,
  display_size: String,
  Resolution: String,
  Ram: String,
  processor: String,
  Rom : String,
  picture: String
});

const Product = mongoose.model('product',ProductSchema);


module.exports = Product;
