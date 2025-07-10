import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Developer', 'Designer', 'Creator', 'Problem Solver'];

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const delayBetweenWords = 1000;
    const currentWord = words[currentIndex % words.length];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, currentIndex, isDeleting]);

  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      position: 'relative',
      overflow: 'hidden'
    },
    contentWrapper: {
      width: '100%',
      paddingLeft: '15px',
      paddingRight: '15px',
    },
    content: {
      opacity: 0,
      animation: 'fadeIn 1s ease-out forwards',
      animationDelay: '0.5s',
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: '700',
      marginBottom: '1rem',
      color: '#2d3436',
      lineHeight: '1.2'
    },
    typedText: {
      color: '#6c5ce7',
      fontWeight: '800',
      borderRight: '3px solid #6c5ce7',
      paddingRight: '5px',
      animation: 'blink 0.7s infinite'
    },
    subtitle: {
      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
      color: '#636e72',
      marginBottom: '2rem'
    },
    buttons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      padding: '12px 30px',
      borderRadius: '50px',
      background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
      color: 'white',
      fontWeight: '600',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(108, 92, 231, 0.3)'
    },
    secondaryButton: {
      padding: '12px 30px',
      borderRadius: '50px',
      background: 'white',
      color: '#6c5ce7',
      fontWeight: '600',
      textDecoration: 'none',
      border: '2px solid #6c5ce7',
      cursor: 'pointer'
    },
    floatingShapes: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      overflow: 'hidden',
      zIndex: 0
    },
    shape: {
      position: 'absolute',
      borderRadius: '50%',
      opacity: '0.1',
      animation: 'float 15s infinite linear'
    },
    shape1: {
      width: '300px',
      height: '300px',
      background: '#6c5ce7',
      top: '10%',
      left: '5%',
      animationDelay: '0s'
    },
    shape2: {
      width: '200px',
      height: '200px',
      background: '#00b894',
      top: '60%',
      left: '70%',
      animationDelay: '2s'
    },
    shape3: {
      width: '150px',
      height: '150px',
      background: '#fd79a8',
      top: '80%',
      left: '20%',
      animationDelay: '4s'
    },
    keyframes: `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(10deg); }
        100% { transform: translateY(0) rotate(0); }
      }
    `
  };

  return (
    <section style={styles.hero}>
      <style>{styles.keyframes}</style>

      <div style={styles.floatingShapes}>
        <div style={{ ...styles.shape, ...styles.shape1 }}></div>
        <div style={{ ...styles.shape, ...styles.shape2 }}></div>
        <div style={{ ...styles.shape, ...styles.shape3 }}></div>
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.content}>
          <h1 style={styles.title}>
            Hi, I'm <span style={{ color: '#6c5ce7' }}>SHOAIB HASSAN</span><br />
            I'm a <span style={styles.typedText}>{typedText}</span>
          </h1>
          <p style={styles.subtitle}>
            I build exceptional digital experiences that are fast, accessible, and visually appealing.
            Let's create something amazing together.
          </p>
          <div style={styles.buttons}>
            <Link
              to="/projects"
              style={styles.primaryButton}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(108, 92, 231, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(108, 92, 231, 0.3)';
              }}
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              style={styles.secondaryButton}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#6c5ce7';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#6c5ce7';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
