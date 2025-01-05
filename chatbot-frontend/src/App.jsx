import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/tailwind.css';
import './App.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import BackgroundVideo from "./components/BackgroundVideo";
import ChatBot from "./components/ChatBot";  // Import your new ChatBotPage component

const App = () => {
  return (
    <Router>
      <BackgroundVideo />
      <Navbar />
      <Routes>
        {/* Other Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chatbot" element={<ChatBot />} /> {/* Add the chatbot route */}
      </Routes>
    </Router>
  );
};

export default App;