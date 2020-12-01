import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { getPersonByName } from '../../../Apollo/queries';
import Loading from '../../../components/Loading';


const CharacterDetails = () => {
  const { name } = useParams();

  const { data: character, loading: characterLoading } = useQuery(
    getPersonByName,
    {
      variables: { name: name },
    },
  );
  
  return characterLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <section className="container">
      {character &&
        character.getPersonByName.map(character => (
          <div className="details__container" key={character.name}>
            <h1 className="details__title">{character.name}</h1>
            <h2 className="details__title__section">Characteristics:</h2>
            <div className="details__info">
              <div className="info">
                <p>
                  <span className="bold">Height:</span> {character.height}
                </p>
                <p>
                  <span className="bold">Mass:</span> {character.mass}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Hair color:</span>{' '}
                  {character.hair_color}
                </p>
                <p>
                  <span className="bold">Skin color:</span>{' '}
                  {character.skin_color}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Eye color:</span> {character.eye_color}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Birthday:</span> {character.birth_year}
                </p>
                <p>
                  <span className="bold">Gender:</span> {character.gender}
                </p>
              </div>
            </div>
            <h2 className="details__title__section">Homeworld:</h2>
            <div className="details__info">
              <div className="info">
                <p>{character.homeworld.name}</p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default CharacterDetails;
