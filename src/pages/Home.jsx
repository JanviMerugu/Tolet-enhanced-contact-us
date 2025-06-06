// src/pages/Home.jsx
import React from 'react';
import '../styles/main.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="contact-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.192116529289!2d78.2467!3d17.5007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf48f3f1b541d%3A0xf89f01fd20295c3f!2sBheemadevarpalle%2C%20Telangana!5e0!3m2!1sen!2sin!4v1717643436954!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ToLet Globe Location"
          ></iframe>
        </div>

        <div className="form-container">
          <h2 className="form-heading">GET IN TOUCH</h2>
          <p className="form-subheading">Have some questions? <br />Feel free to ask them anytime.</p>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit" className="send-btn">Send Message →</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
