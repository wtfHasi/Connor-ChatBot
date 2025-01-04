// src/api.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL

// Login API call
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed!";
  }
};

// Sign-Up API call
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed!";
  }
};

// Chat API call to interact with the chatbot
export const generateChatResponse = async (message) => {
  const token = localStorage.getItem("authToken");
  console.log("Token being sent:", token); // Debugging log
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/intelligence/chat`,
      { message },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("Chatbot response:", response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error("Chatbot API Error:", error.response || error.message);
    throw error.response?.data?.message || "Chatbot request failed!";
  }
};
