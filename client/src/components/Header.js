import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      background: 'linear-gradient(to right, #ff4b91, #8e2de2, #3a8dde)',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      marginTop: 'auto'
    }}>
      <nav>
        <Link to="/" style={{ marginRight: 15, color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/projects" style={{ marginRight: 15, color: 'white', textDecoration: 'none' }}>Projects</Link>
        <Link to="/about" style={{ marginRight: 15, color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
