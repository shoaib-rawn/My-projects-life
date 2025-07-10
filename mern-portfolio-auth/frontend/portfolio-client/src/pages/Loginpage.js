import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const validateForm = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(form.email)) {
      setError('❌ Invalid email format');
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await axios.post('http://localhost:4000/api/login', form);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || '❌ Login failed');
    }
  };

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes shiver {
          0% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          50% { transform: translateX(2px); }
          75% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }
        .shiver {
          animation: shiver 0.3s ease-in-out 3;
        }
      `}</style>

      <div style={styles.card}>
        <h2 className="text-center mb-3">Login</h2>
        {error && <div className="text-danger text-center mb-2 shiver">{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            className="form-control mb-3"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            style={styles.input}
          />
          <div className="input-group mb-3">
            <input
              className="form-control"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              style={styles.input}
            />
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} style={{ color: 'aqua' }} />
            </button>
          </div>
          <button type="submit" className="btn w-100" style={styles.button}>
            Login
          </button>
        </form>
        <p className="text-center mt-3 text-white">
          Don’t have an account? <Link to="/signup" style={{ color: '#ffc107' }}>Signup</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: '100vh',
    margin: 0,
    backgroundImage: "url('/bg1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    padding: '25px',
    borderRadius: '15px',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'white',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
  },
  input: {
    backgroundColor: 'transparent',
    border: '1px solid white',
    color: 'white'
  },
  button: {
    backgroundColor: 'aqua',
    border: '1px solid white',
    color: 'black'
  }
};

export default Login;
