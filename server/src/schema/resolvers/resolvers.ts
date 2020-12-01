import { getAllFromType, getObjectFromTypeByName } from '../../helpers';
import {
  resolveCharacters,
  resolveFilms,
  resolveHomeworld,
  resolvePeople,
  resolveResident,
} from './resolversHelpers';

const resolvers = {
  Planet: {
    films: resolveFilms,
    resident: resolveResident,
  },
  Person: {
    homeworld: resolveHomeworld,
    films: resolveFilms,
  },
  Film: {
    characters: resolveCharacters,
  },
  Species: {
    films: resolveFilms,
    people: resolvePeople,
  },
  Query: {
    getPlanetByName: (parent: any, { name }: any): Promise<string> => {
      return getObjectFromTypeByName('planets', name);
    },
    getPlanets: (): Promise<string[]> => {
      return getAllFromType('planets');
    },
    getPersonByName: async (parent: any, { name }: any): Promise<string> => {
      return await getObjectFromTypeByName('people', name);
    },
    getPersons: (): Promise<string[]> => {
      return getAllFromType('people');
    },
    getFilmByName: (parent: any, { name }: any): Promise<string> => {
      return getObjectFromTypeByName('films', name);
    },
    getFilms: (): Promise<string[]> => {
      return getAllFromType('films');
    },
    getStarshipByName: async (parent: any, { name }: any) => {
      return await getObjectFromTypeByName('starships', name);
    },
    getStarships: (): Promise<string[]> => {
      return getAllFromType('starships');
    },
    getVehicleByName: async (parent: any, { name }: any): Promise<string> => {
      return await getObjectFromTypeByName('vehicles', name);
    },
    getVehicles: (): Promise<string[]> => {
      return getAllFromType('vehicles');
    },
    getSpeciesByName: async (parent: any, { name }: any): Promise<string> => {
      return await getObjectFromTypeByName('species', name);
    },
    getSpecies: (): Promise<string[]> => {
      return getAllFromType('species');
    },
  },
};

export default resolvers;
