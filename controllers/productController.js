import Product from "../models/productModel.js";

// Insert Data
export const insertProducts = async (req, res) => {
  await Product.insertMany([
    { title: "Monitor", category: "Electronics", price: 4999, stock: 10, rating: 4.5 },
    { title: "Mouse", category: "Electronics", price: 299, stock: 20, rating: 4.9 },
    { title: "Printer", category: "Electronics", price: 7999, stock: 5, rating: 5 },
    { title: "Watch", category: "Fashion", price: 999, stock: 2, rating: 4.2 },
  ]);

  res.send("Data Inserted");
};

// Get All
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Filters
export const getCheapProducts = async (req, res) => {
  const products = await Product.find({ price: { $lt: 999 } });
  res.json(products);
};

export const getRatingIn = async (req, res) => {
  const products = await Product.find({ rating: { $in: [4.2, 4.5] } });
  res.json(products);
};

export const getRatingNotIn = async (req, res) => {
  const products = await Product.find({ rating: { $nin: [4.2, 4.5] } });
  res.json(products);
};

export const getRatingEqual = async (req, res) => {
  const products = await Product.find({ rating: { $eq: 5 } });
  res.json(products);
};