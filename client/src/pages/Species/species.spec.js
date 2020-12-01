import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider, useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';

import client from '../../Apollo/client';
import { getSpecies } from '../../Apollo/queries';

import Loading from '../../components/Loading';

export function Species() {
  const { data: allSpecies, loading: speciesLoading } = useQuery(getSpecies);

  if (speciesLoading) return <Loading />;

  return <p>{allSpecies && allSpecies.getSpecies[0].name}</p>;
}

it('renders without error', () => {
  renderer.create(
    <ApolloProvider client={client}>
      <Species />
    </ApolloProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider>
      <Species />
    </MockedProvider>,
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});
