// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Router>
      <div className="app-container" style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
        <Navbar />

        <main style={{ paddingTop: '80px', paddingBottom: '40px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
