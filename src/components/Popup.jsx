// src/components/Popup.jsx
import React from 'react';
import '../styles/main.css';
import { FaCheckCircle } from 'react-icons/fa'; // Make sure react-icons is installed

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <FaCheckCircle className="success-icon" />
        <p>{message}</p>
        <button className="popup-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;