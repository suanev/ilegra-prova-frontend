import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { getSpeciesByName } from '../../../Apollo/queries';

import Loading from '../../../components/Loading';

const SpeciesDetails = () => {
  const { name } = useParams();

  const { data: species, loading: speciesLoading } = useQuery(
    getSpeciesByName,
    {
      variables: { name: name },
    },
  );
  return speciesLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <section className="container">
      {species &&
        species.getSpeciesByName.map(species => (
          <div className="details__container" key={species.name}>
            <h1 className="details__title">{species.name}</h1>
            <h2 className="details__title__section">Characteristics:</h2>
            <div className="details__info">
              <div className="info">
                <p>
                  <span className="bold">Language:</span> {species.language}
                </p>
                <p>
                  <span className="bold">Skin colors:</span>{' '}
                  {species.skin_colors}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Hair color:</span>{' '}
                  {species.hair_colors}
                </p>
                <p>
                  <span className="bold">Skin color:</span> {species.skin_color}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Eye color:</span> {species.eye_color}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Classification:</span>{' '}
                  {species.classification}
                </p>
                <p>
                  <span className="bold">Designation:</span>{' '}
                  {species.designation}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Average height:</span>{' '}
                  {species.average_height}
                </p>
                <p>
                  <span className="bold">Average lifespan:</span>{' '}
                  {species.average_lifespan}
                </p>
              </div>
            </div>
            <h2 className="details__title__section">People:</h2>
            <div className="details__info">
              {species.people.map(people => (
                <div className="info">
                  <p key={people.name}> - {people.name}</p>
                </div>
              ))}
            </div>
            <h2 className="details__title__section">Films:</h2>
            <div className="details__info">
              {species.films.map(film => (
                <div className="info">
                  <p key={film.title}> - {film.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
};

export default SpeciesDetails;
