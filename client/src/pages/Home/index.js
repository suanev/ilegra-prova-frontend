import React from 'react';

import Luke from '../../assets/character1.png';
import Han from '../../assets/character2.jpeg';
import Darth from '../../assets/character3.png';
import Chewbacca from '../../assets/character4.png';
import Leia from '../../assets/character5.png';
import Yoda from '../../assets/character6.png';

import './styles.css';

const Home = () => (
  <div className="home__container">
    <div className="home__description">
      Welcome to the <span>Star Wars Encyclopedia</span>. Star Wars is an
      American space opera franchise created by filmmaker George Lucas, which
      features a series of nine science fantasy films and two spin-offs. The
      first film was released only under the title Star Wars, on May 25, 1977,
      and became an unexpected worldwide phenomenon of popular culture, being
      responsible for the beginning of the "era of blockbusters", which are
      cinematographic overproductions that are successful at the box office and
      become franchises with toys, games, books, etc.
    </div>
    <div className="characters__container">
      <h2 className="characters__title">Principal Characters</h2>
      <div className="characters__images">
        <img
          src={Luke}
          alt="Luke Skywalker"
          title="Luke Skywalker"
          className="character__image"
        />
        <img
          src={Han}
          alt="Han Solo"
          title="Han Solo"
          className="character__image"
        />
        <img
          src={Darth}
          alt="Darth Vader"
          title="Darth Vader"
          className="character__image"
        />
        <img
          src={Chewbacca}
          alt="Chewbacca"
          title="Chewbacca"
          className="character__image"
        />
        <img src={Yoda} alt="Yoda" title="Yoda" className="character__image" />
        <img
          src={Leia}
          alt="Princess Leia"
          title="Princess Leia"
          className="character__image"
        />
      </div>
    </div>
  </div>
);

export default Home;
