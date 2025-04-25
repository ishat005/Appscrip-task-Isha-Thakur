import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="contentContainer">
      <div className="navigate">
        <ul>
          <li>
            <a href="#">HOME&nbsp;</a>
          </li>
          <li>
            <a href="#">SHOP</a>{" "}
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="top-row">
          <h1>DISCOVER OUR PRODUCTS</h1>
        </div>
        <div className="bottom-row">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </div>
      </div>
    </div>
  );
};

export default Content;
