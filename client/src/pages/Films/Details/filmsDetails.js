import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { getFilmByName } from "../../../Apollo/queries";

import formateDate from "../../../helpers/formatDate";
import Loading from "../../../components/Loading";

const FilmsDetails = () => {
  const { title } = useParams();

  const { data: film, loading: filmLoading } = useQuery(getFilmByName, {
    variables: { name: title },
  });

  return filmLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <section className="container">
      {film &&
        film.getFilmByName.map((film) => (
          <div className="details__container" key={film.name}>
            <h1 className="details__title">{film.title}</h1>
            <h2 className="details__title__section">About the movie:</h2>
            <div className="details__info">
              <div className="info">
                <p>
                  <span className="bold">Episode number:</span>{" "}
                  {film.episode_id}
                </p>
                <p>
                  <span className="bold">Release date:</span>{" "}
                  {formateDate(film.release_date)}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Producer by:</span> {film.producer}
                </p>
                <p>
                  <span className="bold">Directed by:</span> {film.director}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Opening crawl:</span>{" "}
                  {film.opening_crawl}
                </p>
              </div>
            </div>
            <h2 className="details__title__section">
              Characters in the movie:{" "}
            </h2>
            <div className="details__info">
              {film.characters.map((character) => (
                <div className="info">
                  <p key={character.name}> - {character.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
};

export default FilmsDetails;
