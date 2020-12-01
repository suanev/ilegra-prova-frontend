import axios from 'axios';
import api from './server';

export const getAllFromType = async (typeName: string): Promise<string[]> => {
  let url = `https://swapi.dev/api/${typeName}`;
  const results = [];

  do {
    try {
      const res = await axios.get(url);
      url = res.data.next;
      results.push(...res.data.results);
    } catch (err) {
      console.error(err);
    }
  } while (url != null);
  return results;
};

export const getObjectFromTypeByName = (
  typeName: string,
  namePath: string,
): Promise<string> =>
  api
    .get(`/${typeName}/?search=${namePath}`)
    .then(resp => resp.data.results)
    .catch(err => console.log(err));
