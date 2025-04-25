import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import heart from '../../images/heart.png'

const Products = () => {
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="products-container">
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.title} />
            <p className="product-title">{product.title}</p>
            <p className="more-detail">
              {" "}
              <a href="#">Sign in</a> or Create an account to see pricing
              <img src={heart} alt="heart" className="icon"/>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
