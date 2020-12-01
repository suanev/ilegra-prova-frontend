import axios from 'axios';

export const resolveFilms = (parent: {
  films: string[];
}): Promise<string[]> => {
  const promises = parent.films.map(async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  });

  return axios.all(promises);
};

export const resolveResident = (parent: {
  residents: string[];
}): Promise<string[]> => {
  const promises = parent.residents.map(async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  });

  return axios.all(promises);
};

export const resolveCharacters = (parent: {
  characters: string[];
}): Promise<string[]> => {
  const promises = parent.characters.map(async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  });

  return axios.all(promises);
};

export const resolvePeople = (parent: {
  people: string[];
}): Promise<string[]> => {
  const promises = parent.people.map(async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  });

  return axios.all(promises);
};

export const resolveHomeworld = async (parent: {
  homeworld: string;
}): Promise<string[]> => {
  const response = await axios.get(parent.homeworld);
  return response.data;
};
