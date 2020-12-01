import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

import './styles.css';

const Header = () => (
  <header className="header__container">
    <Navbar />
    <div className="header">
      <div className="welcome">
        <h1 className="title">Encyclopedia</h1>
          <img
            className="logo__img"
            src="https://i.imgur.com/4vGxWwj.png"
            alt="logo"
          />
      </div>
    </div>
  </header>
);

export default Header;
