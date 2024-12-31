// src/components/Signup.jsx
import React, { useState } from "react";
import { registerUser } from "../api";
import "./Signup.css"; // Import the CSS file

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await registerUser({ email, password });
      console.log("Signup successful:", response);
      alert("Signup successful!");
      // Redirect user or handle signup success
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <video className="bg-video" autoPlay muted loop>
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form onSubmit={handleSignup} className="signup-form">
        <h1>Signup</h1>
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
        <button type="submit">Signup</button>
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