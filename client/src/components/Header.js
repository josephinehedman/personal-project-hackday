import { Router, Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="header__navbar">
      <Link to="/">
        <h1 className="navbar__logo">Tombola</h1>
      </Link>
      <ul className="nav-list">
        <Link to="/about">
          <li className="nav-list__links nav-list__links--left">
            About
          </li>
        </Link>
        <Link to="/activity">
          <li className="nav-list__links nav-list__links--right">
            Activity
          </li>
        </Link>
      </ul>
    </nav>
  </header>
);

export default Header;
