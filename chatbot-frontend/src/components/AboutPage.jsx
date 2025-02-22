import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutPage.css'; // Import the CSS file

const AboutPage = () => {
  const navigate = useNavigate(); // Hook to navigate to other pages
  
  const handleGoHome = () => {
    navigate("/");  // Navigate to homepage
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Connor</h1>
        <p>
          Connor is a personalized AI-powered chatbot designed to assist you with various tasks and provide helpful information. 
          Our mission is to create a seamless interaction between humans and technology, making everyday tasks more efficient and enjoyable.
        </p>
        <h2>Key Features:</h2>
        <ul>
          <li>Friendly and engaging conversation.</li>
          <li>Assist with daily tasks and reminders.</li>
          <li>Quick and concise responses to your queries.</li>
        </ul>
        <h2>Why Connor?</h2>
        <p>
          Connor is built with cutting-edge AI technology to ensure that you receive relevant and accurate responses. 
          Whether you need help with organizing your tasks, reminders, or just a friendly chat, Connor is here to make your life easier.
        </p>
        <button className="go-home-button" onClick={handleGoHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default AboutPage;