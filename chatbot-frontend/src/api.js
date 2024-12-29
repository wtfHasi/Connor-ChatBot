// src/api.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

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
