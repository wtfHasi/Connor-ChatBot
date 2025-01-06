import React from 'react';
import './contact.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to connect with me on the following platforms:</p>
      <div className="contact-links">
        <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
          LinkedIn
        </a>
        <a href="https://instagram.com/yourinstagramusername" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="contact-icon" />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Contact;