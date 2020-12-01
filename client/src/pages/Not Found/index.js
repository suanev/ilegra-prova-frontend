import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.css";

const NotFound = () => (
  <div className="container">
    <div className="content">
      <h1>404</h1>
      <h2>"You lost your own way my son"</h2>
      <Link className="back-link__container" to="/">
        <FaArrowLeft />
        <p>Back to Home</p>
      </Link>
    </div>
  </div>
);

export default NotFound;
