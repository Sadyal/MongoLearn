import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  stock: Number,
  rating: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model("Product", productSchema);

export default Product;