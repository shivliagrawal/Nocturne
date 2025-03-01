import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Marketplace.css";

// Category Images
import electronics from "../assets/electronics.png";
import fashion from "../assets/fashion.png";
import home from "../assets/home.png";
import beauty from "../assets/beauty.png";
import sports from "../assets/sports.png";
import books from "../assets/books.png";

import appleImg from "../assets/apple/iphone.png";
import appleImg2 from "../assets/apple/ipad.png";
import appleImg3 from "../assets/apple/airpod.png";
import samsungImg from "../assets/samsung/galaxy-s25-ultra.png";
import samsungMonitorImg from "../assets/samsung/viewfinity-s8.png";
import samsungBudsImg from "../assets/samsung/galaxy-buds3-pro.png";
import jblClipImg from "../assets/jbl/clip-5.png";
import jblTuneImg from "../assets/jbl/tune-770nc.png";
import jblTourImg from "../assets/jbl/tour-pro-3.png";

const products = [
    { name: "iPhone 16 Pro", prodImg: appleImg, price: "$999", link: "https://www.apple.com/shop/buy-iphone/iphone-16-pro" },
    { name: "iPad Air", prodImg: appleImg2, price: "$599", link: "https://www.apple.com/shop/buy-ipad/ipad-air" },
    { name: "Airpods Max", prodImg: appleImg3, price: "$549", link: "https://www.apple.com/shop/buy-airpods/airpods-max" },
    { name: "Samsung Galaxy S25 Ultra", prodImg: samsungImg, price: "$1299", link: "https://www.samsung.com/us/smartphones/galaxy-s25-ultra/buy/?modelCode=SM-S938UZTEXAA" },
    { name: "Samsung Viewfinity S8 Monitor", prodImg: samsungMonitorImg, price: "$429", link: "https://www.samsung.com/us/computing/monitors/uhd-and-wqhd/27-viewfinity-s8-s80d-4k-uhd-hdr10-high-resolution-monitor-with-ergonomic-stand-ls27d802eanxgo" },
    { name: "Samsung Galaxy Buds3 Pro", prodImg: samsungBudsImg, price: "$249", link: "https://www.samsung.com/us/mobile-audio/galaxy-buds3-pro/buy/galaxy-buds3-pro-silver-sm-r630nzaaxar" },
    { name: "JBL Clip 5", prodImg: jblClipImg, price: "$79", link: "https://www.jbl.com/bluetooth-speakers/CLIP-5.html" },
    { name: "JBL Tune 770NC", prodImg: jblTuneImg, price: "$129", link: "https://www.jbl.com/over-ear-headphones/TUNE770NC.html" },
    { name: "JBL Tour Pro 3", prodImg: jblTourImg, price: "$199", link: "https://www.jbl.com/earbuds/TOUR-PRO-3.html" }
];

// 🛍 Categories
const categories = [
  { name: "Electronics", image: electronics, path: "/category/electronics" },
  { name: "Fashion", image: fashion },
  { name: "Home", image: home },
  { name: "Beauty", image: beauty },
  { name: "Sports", image: sports },
  { name: "Books", image: books },
];


const Marketplace = () => {
  const [cart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Search input

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        };

        const { data } = await axios.get("http://localhost:5050/api/auth/user", config);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error.response?.data?.message || error.message);
      }
    };

    fetchUser();
  }, []);

  // 🔍 Filter products dynamically based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="marketplace-container">
      {/* Sidebar */}
      <div className={`sidebar ${showCart || showUserInfo ? "active" : ""}`}>
        {showCart && (
          <div className="cart-container">
            <h3>Shopping Cart</h3>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {showUserInfo && (
          <div className="user-info-container">
            <h3>User Info</h3>
            <p><strong>Name:</strong> Shivli</p>
            <p><strong>Email:</strong> agraw185@purdue.edu</p>
            <button className="button">Change Account Name</button>
            <button className="button">Sign Out</button>
          </div>
        )}
      </div>

      <div className="marketplace-content">
        {/* Header with Search */}
        <header className="marketplace-header">
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="button" onClick={() => { setShowCart(!showCart); setShowUserInfo(false); }}>🛒</button>
          <button className="button" onClick={() => { setShowUserInfo(!showUserInfo); setShowCart(false); }}>👤</button>
        </header>

        {/* Display Categories IF NO SEARCH, Else Show Products */}
        {searchQuery === "" ? (
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link to={category.path} key={index} className="category-card">
                <img src={category.image} alt={category.name} className="category-image" />
                <div className="category-name">{category.name}</div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div key={index} className="product-card">
                  <img src={product.prodImg} alt={product.name} className="product-image" />
                  <div className="product-name">{product.name}</div>
                  <p>{product.price}</p>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="view-button">View More</a>
                </div>
              ))
            ) : (
              <p className="no-results">No matching products found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
