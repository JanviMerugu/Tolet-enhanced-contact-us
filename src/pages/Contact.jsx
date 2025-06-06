import React from 'react';
import '../styles/main.css'; // Make sure your styles are in this file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome

const Contact = () => {
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
        <form className="contact-form">
          <label htmlFor="topic">Topic</label>
          <select id="topic" name="topic">
            <option value="">select a topic</option>
            <option value="support">Support</option>
            <option value="inquiry">General Inquiry</option>
          </select>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="johndoe" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="name@provider.com" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your Message...."></textarea>

          <button type="submit" className="submit-btn">Submit query</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
