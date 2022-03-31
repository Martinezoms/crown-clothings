import React from "react";
import { images } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  const { facebook, twitter, instagram, youtube } = images;

  return (
    <div className="footer__container">
      <div className="footer__container-left">
        <div className="name">
          <h2>crown clothings</h2>
        </div>
        <div className="motto">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="address">
          <p>121 king street, Melbourne 3000</p>
          <p>+61 3 8376 6284</p>
          <p>contact@urbanoutfitters.com</p>
        </div>
      </div>
      <div className="footer__container-right">
        <div className="shopping">
          <h3>Shopping</h3>
          <ul>
            <li>Your cart</li>
            <li>Your orders</li>
            <li>Compared items</li>
            <li>Wishlist items</li>
            <li>Shipping detail</li>
          </ul>
        </div>
        <div className="more-links">
          <h3>more links</h3>
          <ul>
            <li>Blog</li>
            <li>Gift Center</li>
            <li>Buying Guides</li>
            <li>New Arrivals</li>
            <li>Clearance</li>
          </ul>
        </div>
        <div className="blogs">
          <h3>from the blog</h3>
          <div className="blog">
            <p>
              <span>26</span> May
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>3 comments</p>
          </div>
          <div className="border"></div>
          <div className="blog">
            <p>
              <span>27</span> May
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>3 comments</p>
          </div>
        </div>
      </div>
      <div className="social-media">
        {[facebook, twitter, instagram, youtube].map((item, i) => (
          <div key={i}>
            <img src={item} alt={item} />
          </div>
        ))}
      </div>
      <div className="copyright">
        <p>zomsial design © - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
