import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457529905/assets/41a.amazon_logo_RGB_REV.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="header-searchbar">
        <input className="search-bar" type="text" />
        <SearchIcon className="header-searchIcon" fontSize="large" />
      </div>
      <div className="header-components">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header-option">
            <span className="header-aboveLine">Hello guest</span>
            <span className="header-belowLine">Sign in</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-aboveLine">Return</span>
          <span className="header-belowLine">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-aboveLine">Your</span>
          <span className="header-belowLine">Prime</span>
        </div>
        <div className="header-cart">
          <Link to="/checkout">
            <ShoppingCartCheckoutIcon className="cart-icon" />
          </Link>
          <span className="header-belowLine">{basket?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
