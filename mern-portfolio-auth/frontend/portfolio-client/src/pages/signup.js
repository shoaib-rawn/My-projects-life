import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Signup() {
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
    if (form.password.length < 6) {
      setError('❌ Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post('http://localhost:4000/api/signup', form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || '❌ Signup failed');
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       <style>
        {`
          .transparent-input::placeholder {
            color: white;
            opacity: 0.8;
          }
        `}
      </style>
      <div
        className="card p-4 shadow"
        style={{
          width: '100%',
          maxWidth: '400px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
        }}
      >
        <h2 className="text-center mb-3">Signup</h2>
        {error && <div className="text-danger text-center mb-2">{error}</div>}
        <form onSubmit={handleSignup}>
         <input
    className="form-control mb-3 transparent-input"
    type="email"
    name="email"
    placeholder="Email"
    onChange={handleChange}
    required
    style={{
      backgroundColor: 'transparent',
      border: '1px solid white',
      color: 'white',
    }}
  />
          <div className="input-group mb-3" >
           <input
      className="form-control transparent-input"
      type={showPassword ? 'text' : 'password'}
      name="password"
      placeholder="Password"
      onChange={handleChange}
      required
      style={{
        backgroundColor: 'transparent',
        border: '1px solid white',
        color: 'white',
      }}
    />
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  style={{ color: 'GREEN' }}/>
            </button>
          </div>
          <button className="btn btn-success w-100">Signup</button>
        </form>
        <p className="text-center mt-3 text-white">
          Already have an account? <Link to="/login" style={{ color: '#ffc107' }}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
