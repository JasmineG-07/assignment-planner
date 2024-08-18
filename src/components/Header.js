import React from 'react';
import { Link } from 'react-router-dom';
import logolight from '../assets/Logo-light.png';
import logodark from '../assets/Logo-dark.png';

function Header({ darkMode }) {
  const logo = darkMode ? logodark : logolight;

  return (
    <header className={`app-header ${darkMode ? 'dark-mode' : ''}`}>
      <Link to="/">
        <img src={logo} alt="PlanIt Logo" className="logo" />
      </Link>
      <nav className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/assignments">Assignments</Link>
        <Link to="/notes">Notes</Link>
      </nav>
    </header>
  );
}

export default Header;