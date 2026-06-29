import React from "react";

import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
