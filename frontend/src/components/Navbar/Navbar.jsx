import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">

      <div className="logo">
        FarmCare AI
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link
          className={location.pathname === "/" ? "active-link" : ""}
          to="/"
        >
          Home
        </Link>

        <Link
          className={location.pathname === "/recommendation" ? "active-link" : ""}
          to="/recommendation"
        >
          Crop AI
        </Link>

        <Link
          className={location.pathname === "/library" ? "active-link" : ""}
          to="/library"
        >
          Crop Library
        </Link>

        <Link
          className={location.pathname === "/mandi" ? "active-link" : ""}
          to="/mandi"
        >
          Mandi Prices
        </Link>

      </div>

      <Link
        className="community-link"
          to="/community"
      >Community</Link>

      <div
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
}

export default Navbar;