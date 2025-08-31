import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{ background: "linear-gradient(90deg, #ff6a00, #ee0979)" }}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
          🏫 School Directory
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-white" to="/">
                Show Schools
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-white" to="/add">
                Add School
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
