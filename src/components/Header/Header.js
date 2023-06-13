import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/home"> Home</Link>
        <Link to="/shop"> shop</Link>
        <Link to="/cart"> cart</Link>
        <Link to="/about"> About</Link>
      </nav>
    </div>
  );
};

export default Header;
