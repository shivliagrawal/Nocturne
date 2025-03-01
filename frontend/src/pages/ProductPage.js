import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductPage.css";

// Sample product data (Ideally, fetch this from an API)
const products = [
  { id: 1, name: "iPhone 15", image: "/assets/iphone15.jpg", price: "$999", description: "Latest Apple iPhone 15 with A16 Bionic chip." },
  { id: 2, name: "Samsung Galaxy S23", image: "/assets/galaxyS23.jpg", price: "$899", description: "Samsung’s flagship Galaxy S23 with 120Hz display." },
  { id: 3, name: "JBL Wireless Headphones", image: "/assets/jblheadphones.jpg", price: "$199", description: "High-quality JBL wireless headphones with noise cancellation." },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} className="product-image-large" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductPage;
