// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";  // Use useNavigate instead of useHistory
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false); // State to track scroll position
  const location = useLocation();
  const navigate = useNavigate();  // Access the navigate function for redirection

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // Hide navbar when scrolled down
      } else {
        setScrolling(false); // Show navbar when at the top
      }
    };

    // Add event listener to handle scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    // Clear any authentication data, like a token or user session
    localStorage.removeItem("authToken"); // Example: remove auth token from localStorage
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/">Connor</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
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
        ) : location.pathname === "/chatbot" ? ( // Show logout only on chatbot page
          <button onClick={handleLogout}>Log Out</button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;