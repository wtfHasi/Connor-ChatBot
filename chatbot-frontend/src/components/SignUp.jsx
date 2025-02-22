import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const [isSuccess, setIsSuccess] = useState(false); // State for success indicator

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true); // Show loading spinner

    try {
      const response = await registerUser({ name, email, password });
      console.log("Signup successful:", response);
      setIsLoading(false);
      setIsSuccess(true); // Show success indicator
      setError("");

      // Wait for a few seconds before navigating to the login page
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setIsLoading(false);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup} className="signup-form">
        <h1>Signup</h1>
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {isLoading && <div className="spinner"></div>}
        {isSuccess && <div className="success-icon">&#10004;</div>}
        <button type="submit" disabled={isLoading || isSuccess}>Signup</button>
      </form>
      <div className="welcome-text">
        <p>Welcome to Connor, your AI-powered chatbot companion. Experience the future of interaction!</p>
      </div>
      <div className="footer">
        © 2024 Connor. All Rights Reserved.
      </div>
    </div>
  );
};

export default Signup;