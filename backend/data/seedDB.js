import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product.js';
import connectDB from '../config/db.js';
import products from './products.js';

// Load environment variables BEFORE connecting to MongoDB
dotenv.config();

// Debugging: Print MONGO_URI to confirm it's loaded
console.log('MONGO_URI:', process.env.MONGO_URI);

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany(); // Clears existing products
    await Product.insertMany(products); // Inserts sample products

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Run script
importData();
