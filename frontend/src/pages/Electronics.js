import React from "react";
//import { Link } from "react-router-dom";
import "../styles/Electronics.css";
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

const Electronics = () => {
    return (
        <div className="electronics-container">
            <div className="electronics-title">
                <h1>Electronics</h1>
            </div>
            <div className="product-grid">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.prodImg} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button className="view-more-btn">
                            <a href={product.link} target="_blank" rel="noopener noreferrer">
                                View More
                            </a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Electronics;
