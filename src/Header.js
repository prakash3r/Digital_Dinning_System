import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "0 auto", display: "block" }}>CAFET</h1>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "black",
          }}
        >
          Menu
        </Link>
        <Link
          to="/cart"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "black",
          }}
        >
          Cart
        </Link>
        <Link
          to="/about"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "black",
          }}
        >
          About
        </Link>
        <Link
          to="/cook-view"
          style={{ marginRight: "20px", textDecoration: "none", color: "black" }}
        >
          Cook View
        </Link>
        <Link
          to="/help" // Add link to Help component
          style={{ textDecoration: "none", color: "black" }}
        >
          Help
        </Link>
      </div>
    </header>
  );
};

export default Header;
