import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { getPlanetByName } from '../../../Apollo/queries';

import Loading from '../../../components/Loading';

import './styles.css';

const PlanetsDetails = () => {
  const { name } = useParams();

  const { data: planet, loading: planetLoading } = useQuery(getPlanetByName, {
    variables: { name: name },
  });
  return planetLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <section className="container">
      {planet &&
        planet.getPlanetByName.map(planet => (
          <div className="details__container" key={planet.name}>
            <h1 className="details__title">{planet.name}</h1>
            <hr></hr>
            <h2 className="details__title__section">{planet.name} Motions :</h2>
            <div className="earth-moviments">
              <p>Rotation period: {planet.rotation_period}</p>
              <p>Orbital period: {planet.orbital_period}</p>
            </div>
            <div className="another-infos">
              <div className="info">
                <p>
                  <span className="bold">Diameter:</span> {planet.diameter}
                </p>
                <p>
                  <span className="bold">Climate:</span> {planet.climate}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Gravity:</span> {planet.gravity}
                </p>
                <p>
                  <span className="bold">Terrain:</span> {planet.terrain}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Population:</span> {planet.population}
                </p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default PlanetsDetails;
