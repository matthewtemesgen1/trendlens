import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#20232a', padding: '1rem' }}>
      <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', marginRight: '1rem' }}>About</Link>
      <Link to="/explore" style={{ color: 'white' }}>Explore</Link>
      <Link to="/favorites" style={{ color: 'white', marginLeft: '1rem' }}>Favorites</Link>
    </nav>
  );
}

export default Navbar;