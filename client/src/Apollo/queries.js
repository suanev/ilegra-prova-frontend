import { gql } from '@apollo/client';

export const getFilms = gql`
  query getFilms {
    getFilms {
      title
      director
    }
  }
`;

export const getFilmByName = gql`
  query($name: String!) {
    getFilmByName(name: $name) {
      title
      episode_id
      opening_crawl
      director
      producer
      release_date
      characters {
        name
      }
    }
  }
`;

export const getPersons = gql`
  query getPersons {
    getPersons {
      name
      gender
    }
  }
`;

export const getPersonByName = gql`
  query($name: String!) {
    getPersonByName(name: $name) {
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld {
        name
      }
    }
  }
`;

export const getVehicles = gql`
  query getVehicles {
    getVehicles {
      name
      vehicle_class
    }
  }
`;

export const getVehicleByName = gql`
  query($name: String!) {
    getVehicleByName(name: $name) {
      name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      cargo_capacity
      vehicle_class
    }
  }
`;

export const getPlanets = gql`
  query getPlanets {
    getPlanets {
      name
    }
  }
`;

export const getPlanetByName = gql`
  query($name: String!) {
    getPlanetByName(name: $name) {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      population
      resident {
        name
      }
      films {
        title
      }
    }
  }
`;

export const getStarships = gql`
  query getStarships {
    getStarships {
      name
      model
    }
  }
`;

export const getStarshipByName = gql`
  query($name: String!) {
    getStarshipByName(name: $name) {
      name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      starship_class
      cargo_capacity
    }
  }
`;

export const getSpecies = gql`
  query getSpecies {
    getSpecies {
      name
      language
    }
  }
`;

export const getSpeciesByName = gql`
  query($name: String!) {
    getSpeciesByName(name: $name) {
      name
      language
      skin_colors
      hair_colors
      eye_colors
      classification
      designation
      average_height
      average_lifespan
      people {
        name
      }
      films {
        title
      }
    }
  }
`;
