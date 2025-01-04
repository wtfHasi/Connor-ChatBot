import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./login.css"; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Call the loginUser API and get the response
      const response = await loginUser({ email, password });
      console.log("Login successful:", response);
      alert("Login successful!");

      // Save the token in localStorage
      localStorage.setItem("authToken", response.token);

      // Redirect to chatbot page after successful login
      navigate("/chatbot");  // This will take the user to the /chatbot route
    } catch (err) {
      setError(err);  // Display the error message if login fails
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
        <button type="submit">Login</button>
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