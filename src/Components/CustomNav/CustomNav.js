import React from "react";
import "./CustomNav.css";
import arrowDown from "../../images/arrow-down.png";
import Products from "../Products/Products";

const CustomNav = () => {
  return (
    <div className="content-container">
      <div className="nav-pane">
        <input type="checkbox" id="customizable" />
        <label for="customizable">CUSTOMIZABLE</label>
        <ul>
          <li>
            <h3>
              IDEAL FOR{" "}
              <img src={arrowDown} alt="Arrow Down" className="arrow" />
            </h3>
            <ul>
              <li>All</li>
            </ul>
          </li>
          <li>
            <h3>
              OCCASION{" "}
              <img src={arrowDown} alt="Arrow Down" className="arrow" />
            </h3>
            <ul>
              <li>All</li>
            </ul>
          </li>
          <li>
            <h3>
              WORK <img src={arrowDown} alt="Arrow Down" className="arrow" />
            </h3>
            <ul>
              <li>All</li>
            </ul>
          </li>
          <li>
            <h3>
              FABRIC <img src={arrowDown} alt="Arrow Down" className="arrow" />
            </h3>
            <ul>
              <li>All</li>
            </ul>
          </li>
          <li>
            <h3>
              SEGMENT <img src={arrowDown} alt="Arrow Down" className="arrow" />
            </h3>
            <ul>
              <li>All</li>
            </ul>
          </li>
          <li>
            <h3>
              SUITABLE FOR
              <img src={arrowDown} alt="Arrow Down" className="arrow" />
            </h3>
            <ul>
              <li>All</li>
            </ul>
          </li>
          <li>
            <h3>
              RAW MATERIALS
              <img src={arrowDown} alt="Arrow Down" className="arrow" />
            </h3>
            <ul>
              <li>All</li>
            </ul>
          </li>
          <li>
            <h3>
              PATTERN <img src={arrowDown} alt="Arrow Down" className="arrow" />
            </h3>
            <ul>
              <li>All</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default CustomNav;
