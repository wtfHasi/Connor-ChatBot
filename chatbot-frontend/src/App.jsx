import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/tailwind.css';
import './App.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import BackgroundVideo from "./components/BackgroundVideo";
import ChatBot from "./components/ChatBot";  
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact"; // Import the Contact component

const App = () => {
  return (
    <Router>
      <BackgroundVideo />
      <Navbar />
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<HomePage />} />

        {/* Other Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Contact Page Route */}
        <Route path="/contact" element={<Contact />} /> {/* Add Contact page route */}
      </Routes>
    </Router>
  );
};

export default App;