import React, { useState } from 'react';
import '../styles/main.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    topic: '',
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Query submitted successfully!');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Topic</label>
      <select name="topic" value={formData.topic} onChange={handleChange}>
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
  );
};

export default ContactForm;
