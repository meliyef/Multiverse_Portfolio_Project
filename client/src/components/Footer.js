import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(to right, #ff4b91, #8e2de2, #3a8dde)',
      color: 'white',
      padding: '2rem 1rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      marginTop: 'auto'
    }}>
      <p>© 2025 Melissa Yefsah. All rights reserved.</p>

      <div style={{ margin: '1rem 0' }}>
        <Link to="/about" style={linkStyle}>About</Link> |{' '}
        <Link to="/projects" style={linkStyle}>Projects</Link> |{' '}
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>

      <div style={{ fontSize: '1.2rem' }}>
        <a href="https://github.com/meliyef" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>{' '}
        | <a href="https://www.linkedin.com/in/melissa-yefsah" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 0.5rem'
};

export default Footer;
