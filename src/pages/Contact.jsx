// src/pages/Contact.jsx
import React, { useState } from 'react';
import '../styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  const [topic, setTopic] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // Clear form fields after popup
    setTimeout(() => {
      setTopic('');
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact Us, We're Ready to Help!</h2>
        <p>We strive to provide you with the best experience and the best platform to find your choice.</p>
        <p>Post us any queries and we’ll get back to you.</p>

        <div className="contact-detail">
          <i className="fas fa-comments icon"></i>
          <div>
            <strong>Chat with us !!</strong>
            <p>Our friendly team is here to help</p>
            <a href="mailto:to_let@gmail.com">to_let@gmail.com</a>
          </div>
        </div>

        <div className="contact-detail">
          <i className="fas fa-phone-volume icon"></i>
          <div>
            <strong>Call us...</strong>
            <p>Mon - Fri 8 am to 10 pm</p>
            <a href="tel:+919876543210">+91 9876543210</a>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="topic">Topic</label>
          <select id="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="">select a topic</option>
            <option value="support">Support</option>
            <option value="inquiry">General Inquiry</option>
          </select>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="johndoe" value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="name@provider.com" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your Message...." value={message} onChange={(e) => setMessage(e.target.value)} />

          <button type="submit" className="submit-btn">Submit query</button>
        </form>
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

export default Contact;
