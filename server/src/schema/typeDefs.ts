const typeDefs = `
  type Query {
    getPlanetByName(name: String!): [Planet!]!
    getPlanets: [Planet!]
    getPersonByName(name: String!): [Person!]!
    getPersons: [Person!]
    getFilmByName(name: String!): [Film!]!
    getFilms: [Film!]!
    getStarships: [Starship!]
    getStarshipByName(name: String!): [Starship!]!
    getVehicleByName(name: String!): [Vehicle!]!
    getVehicles: [Vehicle!]!
    getSpeciesByName(name: String!): [Species!]!
    getSpecies: [Species!]!
  }
  
  type Planet {
    name: String!
    rotation_period: String!
    orbital_period: String!
    diameter: String!
    climate: String!
    gravity: String!
    terrain: String!
    population: String!
    resident: [Person!]!
    films: [Film!]!
  }

  type Film {
    title: String!
    episode_id: Int!
    opening_crawl: String!
    director: String!
    producer: String!
    release_date: String!
    characters: [Person!]!
  }

  type Person {
    name: String!
    height: String!
    mass: String!
    hair_color: String!
    skin_color: String!
    eye_color: String!
    birth_year: String!
    gender: String!
    films: [Film!]!
    homeworld: Planet!
  }

  type Starship {
    name: String! 
    model: String! 
    manufacturer: String! 
    cost_in_credits: String! 
    length: String!
    max_atmosphering_speed: String! 
    crew: String!
    passengers: String! 
    cargo_capacity: String! 
    starship_class: String! 
  }

  type Vehicle {
    name: String!, 
    model: String!, 
    manufacturer: String!, 
    cost_in_credits: String!, 
    length: String!, 
    max_atmosphering_speed: String!, 
    crew: String!, 
    passengers: String!, 
    cargo_capacity: String!, 
    vehicle_class: String!, 
  }

  type Species {
    average_height: String!
    average_lifespan: String!
    classification: String!
    designation: String!
    eye_colors: String!
    hair_colors: String!
    language: String!
    name: String!
    people: [Person!]!
    films: [Film!]!
    skin_colors: String!
  }
`;

export default typeDefs;
