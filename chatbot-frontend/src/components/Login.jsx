import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const [isSuccess, setIsSuccess] = useState(false); // State for success indicator

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner

    try {
      const response = await loginUser({ email, password });
      console.log("Login successful:", response);
      localStorage.setItem("authToken", response.token);

      setIsLoading(false);
      setIsSuccess(true); // Show success indicator
      setError("");

      // Wait for a few seconds before navigating to the chatbot page
      setTimeout(() => {
        navigate("/chatbot");
      }, 3000);
    } catch (err) {
      setIsLoading(false);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login</h1>
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
        {error && <p className="error-message">{error}</p>}
        {isLoading && <div className="spinner"></div>}
        {isSuccess && <div className="success-icon">&#10004;</div>}
        <button type="submit" disabled={isLoading || isSuccess}>Login</button>
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

export default Login;