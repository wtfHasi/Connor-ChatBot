// src/components/SignUp.jsx
import React, { useState } from "react";
import { registerUser } from "../api";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ name, email, password });
      console.log("Registration successful:", response);
      // Handle registration success
      alert("Registration successful! You can now log in.");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
