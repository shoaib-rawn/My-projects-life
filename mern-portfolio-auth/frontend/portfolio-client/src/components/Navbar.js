import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const navStyle = {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    padding: '10px 0',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const navLink = {
    position: 'relative',
    padding: '10px 20px',
    margin: '0 5px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
    borderRadius: '30px',
    transition: '0.3s',
    overflow: 'hidden',
  };

  const bubble = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '30px',
    zIndex: -1,
    transform: 'scale(0)',
    transition: 'transform 0.4s',
  };

  const handleHover = (e, hover) => {
    const bubble = e.currentTarget.querySelector('span');
    if (bubble) {
      bubble.style.transform = hover ? 'scale(1)' : 'scale(0)';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navStyle}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/">Portfolio</Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {[
              { path: '/', label: 'Home' },
              { path: '/projects', label: 'Projects' },
              { path: '/contact', label: 'Contact' },
              { path: '/feedback', label: 'Feedback' }
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  to={item.path}
                  className="nav-link"
                  style={{
                    ...navLink,
                    backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.15)' : 'transparent',
                  }}
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  {item.label}
                  <span style={bubble}></span>
                </Link>
              </li>
            ))}

            <li className="nav-item ms-2">
              {isLoggedIn ? (
                <button className="btn btn-outline-light rounded-pill" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to="/login" className="btn btn-outline-light rounded-pill">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
