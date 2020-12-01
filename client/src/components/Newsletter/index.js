import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';

import './styles.css';

const Newsletter = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const [classStyle, setClassStyle] = useState({
    styleName: '',
    styleEmail: '',
  });
  const [loading, setLoading] = useState(false);

  const nameValidate = () => {
    if (!!user.name) {
      user.name.length >= 3
        ? setClassStyle({
            ...classStyle,
            styleName: 'validate-success',
          })
        : setClassStyle({
            ...classStyle,
            styleName: 'validate-error',
          });
    }
  };

  const emailValidate = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!!user.email) {
      regex.test(user.email)
        ? setClassStyle({
            ...classStyle,
            styleEmail: 'validate-success',
          })
        : setClassStyle({
            ...classStyle,
            styleEmail: 'validate-error',
          });
    }
  };

  const handleChangeName = e => {
    setUser({ ...user, name: e.target.value });
  };

  const handleChangeEmail = e => {
    setUser({ ...user, email: e.target.value });
  };

  const sendRequest = event => {
    event.preventDefault();
    setLoading(!loading);
    alert(
      'The Dark Force saved your email, and we will send you some news soon!',
    );
  };

  useEffect(() => {
    nameValidate();
    emailValidate();
  }, [user]);

  return (
    <section className="newsletter">
      <form className="newsletter__container">
        <div className="newsletter__information">
          <h1 className="newsletter__title">
            The Dark Side of the Force is your source of news
          </h1>
          <p className="newsletter__text">
            Relax, the dark side will <span className="line">not</span> send you
            spam.
          </p>
        </div>
        <div className="form__content">
          <input
            value={user.name}
            onChange={handleChangeName}
            className={classStyle.styleName}
            type="text"
            placeholder="Your name"
          />
          <input
            className={classStyle.styleEmail}
            type="text"
            value={user.email}
            placeholder="email@email.com"
            onChange={handleChangeEmail}
          />
        </div>
        <div className="btn__container">
          <button
            className="btn"
            disabled={(!user.name, !user.email)}
            onClick={sendRequest}
          >
            Assinar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
