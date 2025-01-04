import React from "react";
import PropTypes from "prop-types"; // For prop validation
import "./message.css"; // Import CSS styles

const Message = ({ text, isUser }) => {
  return (
    <div className={`message ${isUser ? "user-message" : "bot-message"}`}>
      {/* Render the text properly */}
      <p>{text}</p>
    </div>
  );
};

// Prop validation
Message.propTypes = {
  text: PropTypes.string.isRequired, // Ensure the text is always a string
  isUser: PropTypes.bool.isRequired, // Ensure isUser is a boolean
};

export default Message;

