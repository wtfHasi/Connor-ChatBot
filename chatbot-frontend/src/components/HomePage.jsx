import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router
import './homepage.css';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleGetStarted = () => {
    navigate('/login'); // Redirect to the login page when button is clicked
  };

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Connor</h1>
        <p className="hero-subtitle">Your Personal Assistant, Always Ready to Help</p>
        <button className="hero-cta" onClick={handleGetStarted}>Get Started</button>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Connor</h2>
        <p>
          Connor is a personalized chatbot designed to assist you with your daily tasks, manage your calendar, 
          and respond to your personal needs. With Connor, you have a reliable assistant that understands and 
          adapts to your preferences.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Smart Reminders</h3>
            <p>Set reminders for important events and never miss a beat with Connor.</p>
          </div>
          <div className="feature-item">
            <h3>Personalized Responses</h3>
            <p>Connor learns from your interactions to provide customized assistance.</p>
          </div>
          <div className="feature-item">
            <h3>Calendar Integration</h3>
            <p>Sync your calendar and let Connor manage your appointments seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or need support? Contact us at <a href="mailto:support@connor.com">support@connor.com</a>
        </p>
      </section>
    </div>
  );
};

export default HomePage;

