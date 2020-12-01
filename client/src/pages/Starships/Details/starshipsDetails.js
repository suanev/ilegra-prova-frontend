import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { getStarshipByName } from '../../../Apollo/queries';

import Loading from '../../../components/Loading';

const StarshipsDetails = () => {
  const { name } = useParams();

  const { data: starships, loading: starshipsLoading } = useQuery(getStarshipByName, {
    variables: { name: name },
  });
  return starshipsLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <section className="container">
      {starships &&
        starships.getStarshipByName.map(starship => (
          <div className="details__container" key={starship.name}>
            <h1 className="details__title">{starship.name}</h1>
            <h2 className="details__title__section">Characteristics:</h2>
            <div className="details__info">
              <div className="info">
                <p>
                  <span className="bold">Model:</span> {starship.model}
                </p>
                <p>
                  <span className="bold">Manufacturer:</span>{' '}
                  {starship.manufacturers}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Cost in credits: </span>{' '}
                  {starship.cost_in_credits}
                </p>
                <p>
                  <span className="bold">Length:</span> {starship.length}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Max atmosphering speed:</span>{' '}
                  {starship.max_atmosphering_speed}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Crew:</span> {starship.crew}
                </p>
                <p>
                  <span className="bold">Passengers:</span> {starship.passengers}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Cargo_capacity:</span>{' '}
                  {starship.cargo_capacity}
                </p>
                <p>
                  <span className="bold">Starship class:</span>{' '}
                  {starship.starship_class}
                </p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default StarshipsDetails;
