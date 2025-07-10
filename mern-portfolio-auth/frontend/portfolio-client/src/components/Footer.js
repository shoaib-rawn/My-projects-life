// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer
      className="text-white text-center p-3 mt-auto"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <small>&copy; 2025 My Portfolio. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
