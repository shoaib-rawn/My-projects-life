import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', rating: 5, comments: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    setTimeout(() => navigate('/'), 3000);
  };

  const styles = {
    page: { 
      minHeight: 'calc(100vh - 150px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)'
    },
    form: { 
      width: '100%',
      maxWidth: 500,
      padding: 25,
      borderRadius: 15,
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      background: '#fff'
    },
    input: { 
      padding: 10,
      borderRadius: 6,
      border: '1px solid #ddd',
      marginBottom: 15,
      width: '100%',
      fontSize: 14
    },
    label: { 
      marginBottom: 6,
      fontWeight: 500,
      display: 'block',
      color: '#555',
      fontSize: 14
    },
    button: { 
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: '#fff',
      border: 0,
      padding: '10px 20px',
      borderRadius: 25,
      fontSize: 15,
      width: '100%',
      marginTop: 5,
      cursor: 'pointer',
      transition: 'transform 0.2s ease'
    },
    successMessage: {
      textAlign: 'center',
      padding: 20
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.form}>
        {submitted ? (
          <div style={styles.successMessage}>
            <h2 style={{ color: '#764ba2', marginBottom: 10 }}>Thank You!</h2>
            <p style={{ marginBottom: 20 }}>Your feedback has been submitted successfully.</p>
            <div className="spinner-border text-primary" style={{ width: '2rem', height: '2rem' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 style={{ textAlign: 'center', marginBottom: 20, fontSize: 22 }}>Share Your Feedback</h2>
            
            {['name', 'email'].map((field) => (
              <div key={field}>
                <label htmlFor={field} style={styles.label}>
                  {field === 'name' ? 'Your Name' : 'Email Address'}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder={`Your ${field}`}
                  required
                />
              </div>
            ))}

            <label style={styles.label}>Rate Your Experience</label>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
              {[1, 2, 3, 4, 5].map(star => (
                <label 
                  key={star} 
                  htmlFor={`star-${star}`} 
                  style={{ 
                    fontSize: 24, 
                    cursor: 'pointer', 
                    color: formData.rating >= star ? '#ffc107' : '#ddd',
                    transition: 'color 0.2s ease'
                  }}
                >
                  <input
                    type="radio"
                    id={`star-${star}`}
                    name="rating"
                    value={star}
                    checked={formData.rating === star}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                  />
                  ★
                </label>
              ))}
            </div>

            <label htmlFor="comments" style={styles.label}>Your Feedback</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              style={{ ...styles.input, minHeight: 80 }}
              placeholder="Share your thoughts"
              required
            />

            <button 
              type="submit" 
              style={styles.button}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Feedback;
