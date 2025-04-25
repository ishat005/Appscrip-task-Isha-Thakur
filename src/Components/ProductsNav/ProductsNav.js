import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductsNav.css";
import arrowLeft from "../../images/arrow-left.png";
import CustomNav from "../CustomNav/CustomNav";

const ProductsNav = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/products.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="item-count-filter-container">
      <div className="mobile-nav">
        <ul>
          <li>FILTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li>
            <div className="filter-dropdown-mobile">
              <select>
                <option value="all">RECOMMENDED</option>
                <option value="newest-first">NEWEST FIRST</option>
                <option value="popular">POPULAR</option>
                <option value="price-high-to-low">PRICE: HIGH TO LOW</option>
                <option value="price-low-to-high">PRICE: LOW TO HIGH</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
      <div className="item-count-column">
        <span>{products.length} ITEMS</span>
        <img src={arrowLeft} alt="Left Arrow" />
        <a href="#">SHOW FILTER</a>
      </div>

      <div className="filter-dropdown">
        <select>
          <option value="all">RECOMMENDED</option>
          <option value="newest-first">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="price-high-to-low">PRICE: HIGH TO LOW</option>
          <option value="price-low-to-high">PRICE: LOW TO HIGH</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsNav;
