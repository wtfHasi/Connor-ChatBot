// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/tailwind.css';
import './App.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <video className="bg-video" autoPlay muted loop>
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Homepage />} />

        {/* Other Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
