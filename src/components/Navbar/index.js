import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar">
      <BrowserRouter>
        <Link className="navbar-brand" to="/">
          Employee Directory
        </Link>
      </BrowserRouter>
    </nav>
  );
}

export default Navbar;
