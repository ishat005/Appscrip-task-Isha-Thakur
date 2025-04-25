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
              <ul className="dropdown-filter">
                <li>
                  <input type="checkbox" id="all-ideal-for" />
                  <label for="all-ideal-for">All</label>
                </li>
                <li>
                  <input type="checkbox" id="men-ideal-for" />
                  <label for="men-ideal-for">Men</label>
                </li>
                <li>
                  <input type="checkbox" id="women-ideal-for" />
                  <label for="women-ideal-for">Women</label>
                </li>
                <li>
                  <input type="checkbox" id="baby-and-kids-ideal-for" />
                  <label for="baby-and-kids-ideal-for">Baby & Kids</label>
                </li>
              </ul>
            </h3>
          </li>
          <li>
            <h3>
              OCCASION{" "}
              <img src={arrowDown} alt="Arrow Down" className="arrow" />
              <ul className="dropdown-filter">
                <li>
                  <input type="checkbox" id="all-occasion" />
                  <label for="all-occasion">All</label>
                </li>
                <li>
                  <input type="checkbox" id="formal-occasion" />
                  <label for="formal-occasion">Formal</label>
                </li>
                <li>
                  <input type="checkbox" id="casual-occasion" />
                  <label for="casual-occasion">Casual</label>
                </li>
              </ul>
            </h3>
          </li>
          <li>
            <h3>
              WORK <img src={arrowDown} alt="Arrow Down" className="arrow" />
              <ul className="dropdown-filter">
                <li>
                  <input type="checkbox" id="all-work" />
                  <label for="all-work">All</label>
                </li>
                <li>
                  <input type="checkbox" id="office-work" />
                  <label for="office-work">Office</label>
                </li>
                <li>
                  <input type="checkbox" id="outdoor-work" />
                  <label for="outdoor-work">Outdoor</label>
                </li>
              </ul>
            </h3>
          </li>
          <li>
            <h3>
              FABRIC <img src={arrowDown} alt="Arrow Down" className="arrow" />
              <ul className="dropdown-filter">
                <li>
                  <input type="checkbox" id="all-fabric" />
                  <label for="all-fabric">All</label>
                </li>
                <li>
                  <input type="checkbox" id="cotton-fabric" />
                  <label for="cotton-fabric">Cotton</label>
                </li>
                <li>
                  <input type="checkbox" id="polyester-fabric" />
                  <label for="polyester-fabric">Polyester</label>
                </li>
              </ul>
            </h3>
          </li>
          <li>
            <h3>
              SEGMENT <img src={arrowDown} alt="Arrow Down" className="arrow" />
              <ul className="dropdown-filter">
                <li>
                  <input type="checkbox" id="all-segment" />
                  <label for="all-segment">All</label>
                </li>
                <li>
                  <input type="checkbox" id="men-segment" />
                  <label for="men-segment">Men</label>
                </li>
                <li>
                  <input type="checkbox" id="women-segment" />
                  <label for="women-segment">Women</label>
                </li>
                <li>
                  <input type="checkbox" id="baby-and-kids-segment" />
                  <label for="baby-and-kids-segment">Baby & Kids</label>
                </li>
              </ul>
            </h3>
          </li>
          <li>
            <h3>
              SUITABLE FOR
              <img src={arrowDown} alt="Arrow Down" className="arrow" />
              <ul className="dropdown-filter">
                <li>
                  <input type="checkbox" id="all-suitable-for" />
                  <label for="all-suitable-for">All</label>
                </li>
                <li>
                  <input type="checkbox" id="men-suitable-for" />
                  <label for="men-suitable-for">Men</label>
                </li>
                <li>
                  <input type="checkbox" id="women-suitable-for" />
                  <label for="women-suitable-for">Women</label>
                </li>
                <li>
                  <input type="checkbox" id="baby-and-kids-suitable-for" />
                  <label for="baby-and-kids-suitable-for">Baby & Kids</label>
                </li>
              </ul>
            </h3>
          </li>
          <li>
            <h3>
              RAW MATERIALS
              <img src={arrowDown} alt="Arrow Down" className="arrow" />
              <ul className="dropdown-filter">
                <li>
                  <input type="checkbox" id="all-raw-materials" />
                  <label for="all-raw-materials">All</label>
                </li>
                <li>
                  <input type="checkbox" id="cotton-raw-materials" />
                  <label for="cotton-raw-materials">Cotton</label>
                </li>
                <li>
                  <input type="checkbox" id="polyester-raw-materials" />
                  <label for="polyester-raw-materials">Polyester</label>
                </li>
              </ul>
            </h3>
          </li>
          <li>
            <h3>
              PATTERN <img src={arrowDown} alt="Arrow Down" className="arrow" />
              <ul className="dropdown-filter">
                <li>
                  <input type="checkbox" id="all-pattern" />
                  <label for="all-pattern">All</label>
                </li>
                <li>
                  <input type="checkbox" id="solid-pattern" />
                  <label for="solid-pattern">Solid</label>
                </li>
                <li>
                  <input type="checkbox" id="striped-pattern" />
                  <label for="striped-pattern">Striped</label>
                </li>
              </ul>
            </h3>
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
