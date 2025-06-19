import React, { useState } from 'react';
import axios from 'axios';
import '../styles/main.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    topic: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://toletuscontactus.onrender.com/contact', formData);
      setShowPopup(true);
      setFormData({
        topic: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Topic</label>
        <select name="topic" value={formData.topic} onChange={handleChange} required>
          <option value="">Select a topic</option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="listing">Property Listing</option>
        </select>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="example@gmail.com"
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="9876543210"
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message..."
          required
        ></textarea>

        <button type="submit">Submit Query</button>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <i className="fas fa-check-circle success-icon"></i>
            <p>Your query is submitted!</p>
            <button className="popup-close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
