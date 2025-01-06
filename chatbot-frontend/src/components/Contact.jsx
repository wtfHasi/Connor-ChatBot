// src/components/Contact.jsx
import React from "react";
import './contact.css'; // Import the CSS file
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Feel free to connect with me on the following platforms:</p>
        <div className="contact-links">
          <a href={import.meta.env.VITE_GITHUB_LINK} target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact-icon" />
            GitHub
          </a>
          <a href={import.meta.env.VITE_LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" />
            LinkedIn
          </a>
          <a href={import.meta.env.VITE_INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="contact-icon" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

