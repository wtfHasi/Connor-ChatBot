import React, { useState, useEffect, useRef } from "react";
import { generateChatResponse } from "../api"; // Import the API to interact with Cohere
import Message from './Message'; // Import the Message component
import './chatbot.css'; // Import the chatbot's CSS

const ChatBot = () => {
  const [userMessage, setUserMessage] = useState(""); // User input message
  const [messages, setMessages] = useState([]); // Store the conversation
  const chatMessagesRef = useRef(null); // Reference for the chat messages container

  // Scroll to bottom of the chat window
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]); // Run this effect whenever messages change

  // Handle user message input
  const handleUserMessage = async (e) => {
    e.preventDefault();

    // Add user's message to the chat
    setMessages([...messages, { text: userMessage, isUser: true }]);
    setUserMessage(""); // Clear input field

    // Send user message to backend (Cohere AI) and get response
    try {
      const response = await generateChatResponse(userMessage); // Call backend API to get response from Cohere
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
      <div
        className="chat-window"
        ref={chatMessagesRef} // Attach ref to the chat messages container
      >
        {/* Display chat messages */}
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>

      <form onSubmit={handleUserMessage} className="chat-input-area">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
          required
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
