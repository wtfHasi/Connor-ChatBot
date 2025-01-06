import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/">Connor</Link>
      </div>
      <div className="nav-links">
        {location.pathname !== "/" && <Link to="/">Home</Link>}
        {location.pathname !== "/about" && <Link to="/about">About</Link>}
        {location.pathname !== "/contact" && <Link to="/contact">Contact</Link>}
      </div>
      <div className="auth-buttons">
        {location.pathname === "/login" ? (
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        ) : location.pathname === "/signup" ? (
          <Link to="/login">
            <button>Login</button>
          </Link>
        ) : location.pathname === "/chatbot" ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;