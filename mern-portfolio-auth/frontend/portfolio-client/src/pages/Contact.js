import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Add these imports at the top of your file
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add the icons to the library
library.add(fas, fab);

const Contact = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => navigate('/'), 3000);
  };

  const styles = {
    page: {
      minHeight: 'calc(100vh - 100px)',
      padding: '40px 0',
      background: 'linear-gradient(135deg, #e0f7fa, #b2ebf2)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    box: {
      display: 'flex',
      flexDirection: 'row',
      width: '90%',
      maxWidth: '1000px',
      background: '#fff',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      '@media (max-width: 768px)': {
        flexDirection: 'column'
      }
    },
    left: {
      flex: 1,
      padding: '30px',
      backgroundColor: '#f8f9fa'
    },
    right: {
      flex: 1,
      padding: '30px'
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#00796b',
      fontWeight: 600
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
      color: '#555',
      fontSize: '16px'
    },
    icon: {
      marginRight: '10px',
      width: '20px',
      color: '#00796b'
    },
    input: {
      width: '100%',
      padding: '8px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      marginBottom: '20px',
      fontSize: '16px'
    },
    label: {
      marginBottom: '8px',
      fontWeight: '500',
      color: '#555',
      display: 'block'
    },
    button: {
      background: 'linear-gradient(135deg, #00796b, #009688)',
      color: '#fff',
      border: 0,
      padding: '12px 25px',
      borderRadius: '30px',
      width: '100%',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    social: {
      display: 'flex',
      gap: '20px',
      marginTop: '30px'
    },
    socialIcon: {
      color: '#00796b',
      transition: '0.3s',
      cursor: 'pointer',
      fontSize: '22px',
      '&:hover': {
        color: '#009688'
      }
    }
  };

  return (
    <div style={styles.page}>
      {submitted ? (
        <div style={{ textAlign: 'center', padding: 40 }}>
          <h2 style={{ color: '#00796b' }}>Message Sent!</h2>
          <p>Thank you for contacting us.</p>
          <div className="spinner-border text-primary mt-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div style={styles.box}>
          {/* Left Side - Contact Info */}
          <div style={styles.left}>
            <h2 style={styles.heading}>Get in Touch</h2>
            <div style={styles.infoItem}>
              <FontAwesomeIcon icon={['fas', 'map-marker-alt']} style={styles.icon} />
              123 Business Ave, New York, NY
            </div>
            <div style={styles.infoItem}>
              <FontAwesomeIcon icon={['fas', 'phone']} style={styles.icon} />
              +1 (555) 123-4567
            </div>
            <div style={styles.infoItem}>
              <FontAwesomeIcon icon={['fas', 'envelope']} style={styles.icon} />
              contact@example.com
            </div>

            <div style={styles.social}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} style={styles.socialIcon} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'twitter']} style={styles.socialIcon} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} style={styles.socialIcon} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'instagram']} style={styles.socialIcon} />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div style={styles.right}>
            <h2 style={styles.heading}>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} style={styles.label}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    placeholder={`Enter your ${field}`}
                    style={styles.input}
                  />
                </div>
              ))}

              <label htmlFor="message" style={styles.label}>Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
                style={{ ...styles.input, minHeight: '120px' }}
              />

              <button
                type="submit"
                style={styles.button}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 121, 107, 0.4)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;