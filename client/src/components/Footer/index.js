import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';

const Footer = () => (
  <footer className="footer__container">
    <div className="container">
      <div className="footer__section">
        <div className="logo">
          <h1 className="logo__title">Encyclopedia</h1>
          <img src="https://i.imgur.com/4vGxWwj.png" className="logo__image" />
        </div>
      </div>
      <div className="footer__section">
        <div className="disclaimer">
          <p>
            The <span className="highlight">Star Wars Encyclopedia</span> is a
            website made by fans for fans and its main purpose is to share
            information about Star Wars. We have no connection with Lucas
            Filmes, directors or actors. Any information posted on this site is
            protected by the copyright of its respective original owners, as
            well as all of our content produced, edited, translated and
            subtitled must be credited whenever reproduced on another site.
            Total or partial copying of this website, as well as this layout, is
            prohibited. Learn more about our privacy policy by clicking here.
          </p>
        </div>
      </div>
      <div className="footer__section">
        <div className="social-medias">
          <span className="highlight">Follow Star Wars</span>
          <div id="social-medias__icons">
            <Link
              to={{
                pathname: 'https:twitter.com/starwars',
              }}
              target="_blank"
            >
              <FaTwitter className="social-media__icon" />
            </Link>
            <Link
              to={{
                pathname: 'https:www.instagram.com/starwars/',
              }}
              target="_blank"
            >
              <FaInstagram className="social-media__icon" />
            </Link>
            <Link
              to={{
                pathname:
                  'https:www.facebook.com/StarWars.br/?brand_redir=169299103121699',
              }}
              target="_blank"
            >
              <FaFacebook className="social-media__icon" />
            </Link>
            <Link
              to={{
                pathname: 'https:www.youtube.com/user/starwars',
              }}
              target="_blank"
            >
              <FaYoutube className="social-media__icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
