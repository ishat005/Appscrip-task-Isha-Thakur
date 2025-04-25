import React from "react";
import "./Footer.css";
import currency from "../../images/currency.png";
import insta from "../../images/Insta.png";
import linkedin from "../../images/linkedin.png";
import paymentMethods from "../../images/payment-methods.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div class="footer-row-1">
        <div class="footer-col-1">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <input type="email" placeholder="Enter your  e-mail..." />
          <button type="submit">SUBSCRIBE</button>
        </div>
        <div class="footer-col-2">
          <h3>CONTACT US</h3>
          <ul>
            <li>+44 221 133 5360</li>
            <li>customercare@mettamuse.com</li>
          </ul>
          <h3>CURRENCY</h3>
          <img src={currency} alt="currency" />
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div class="footer-row-2">
        <div class="footer-col-3">
          <h3> mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div class="footer-col-4">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div class="footer-col-5">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <img src={insta} alt="insta" />
            <img src={linkedin} alt="linkedin" />
          </div>

          <div>
            <h3 className="payment-info"> mettā muse ACCEPTS</h3>
            <img
              src={paymentMethods}
              alt="paymentMethods"
              className="paymentMethods"
            />
          </div>
        </div>
      </div>
      <p>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  );
};

export default Footer;
