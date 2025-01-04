// src/components/ChatBot.jsx
import React, { useState } from "react";
import { generateChatResponse } from "../api";  // Import the API to interact with Cohere
import Message from './Message';  // Import the Message component
import './chatbot.css';  // Import the chatbot's CSS

const ChatBot = () => {
  const [userMessage, setUserMessage] = useState("");  // User input message
  const [messages, setMessages] = useState([]);  // Store the conversation

  // Handle user message input
  const handleUserMessage = async (e) => {
    e.preventDefault();
    
    // Add user's message to the chat
    setMessages([...messages, { text: userMessage, isUser: true }]);
    setUserMessage("");  // Clear input field

    // Send user message to backend (Cohere AI) and get response
    try {
      const response = await generateChatResponse(userMessage);  // Call backend API to get response from Cohere
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.response, isUser: false },
      ]);
    } catch (error) {
      console.error("Error getting response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, I couldn't process your request.", isUser: false },
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {/* Display chat messages */}
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>

      <form onSubmit={handleUserMessage} className="chat-input-form">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type a message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;

