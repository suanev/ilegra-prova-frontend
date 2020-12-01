import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Category = ({ items, link }) => {
  const initialCardsNumbers = 10;
  const showMoreCards = 3;

  const [showItems, setShowItems] = useState(initialCardsNumbers);

  const handleShowMore = () => {
    setShowItems(
      showItems >= items.length ? showItems : showItems + showMoreCards,
    );
  };

  return (
    <div className="category__container">
      {items &&
        items.slice(0, showItems).map((item, index) => (
          <section className="category__card">
            <div className="category__description" key={index}>
              <h1 className="category__title">{item.name || item.title}</h1>
              <Link
                to={`/${link}/${item.title || item.name}`}
                className="card__link"
              >
                + details
              </Link>
            </div>
          </section>
        ))}
      <button onClick={handleShowMore} className="btn-see-more">
        {showItems < items.length ? 'Show more' : 'That is all'}
      </button>
    </div>
  );
};

export default Category;
