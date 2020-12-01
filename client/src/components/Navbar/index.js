import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import './styles.css';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const isVisible = !menu ? 'closed' : '';

  return (
    <nav className="navbar__container">
      <div className="container">
        <div className={`nav__container ${isVisible}`}>
          <ul>
            <li>
              <Link to="/" className="link">Home</Link>
            </li>
            <li>
              <Link to="/films" className="link">Films</Link>
            </li>
            <li>
              <Link to="/characters" className="link">Characters</Link>
            </li>
            <li>
              <Link to="/planets" className="link">Planets</Link>
            </li>
            <li>
              <Link to="/species" className="link">Species</Link>
            </li>
            <li>
              <Link to="/vehicles" className="link">Vehicles</Link>
            </li>
            <li>
              <Link to="/starships" className="link">Starships</Link>
            </li>
          </ul>
        </div>
        <FaBars
          onClick={toggleMenu}
          color="white"
          className={`menu__icon ${!isVisible}`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
