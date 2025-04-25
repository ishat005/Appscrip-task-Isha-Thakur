import React from "react";
import "./ProductsNav.css";
import arrowLeft from "../../images/arrow-left.png";
import arrowDown from "../../images/arrow-down.png";

const ProductsNav = () => {
  return (
    <div className="item-count-filter-container">
      <div className="mobile-nav">
        <ul>
          <li>FILTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li>RECOMMENDED</li>
        </ul>
      </div>
      <div className="item-count-column">
        <span>3425 ITEMS</span>
        <img src={arrowLeft} alt="Left Arrow" />
        <a href="#">HIDE FILTER</a>
      </div>
      <div className="recommended-column">
        <span>RECOMMENDED</span>
        <img src={arrowDown} alt="Arrow Down" />
      </div>
    </div>
  );
};

export default ProductsNav;
