// src/pages/Home.jsx
import React, { useState } from 'react';
import '../styles/main.css';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // Clear form fields after popup
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1000);
  };

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
          <p className="form-subheading">
            Have some questions? <br /> Feel free to ask them anytime.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" placeholder="Phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            <textarea placeholder="Message" rows="4" required value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit" className="send-btn">Send Message →</button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <i className="fas fa-check-circle success-icon"></i>
            <p>Your query is submitted!</p>
            <button className="popup-close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
