import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider, useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';

import client from '../../Apollo/client';
import { getStarships } from '../../Apollo/queries';

import Loading from '../../components/Loading';

export function Starships() {
  const { data: allStarship, loading: starshipLoading } = useQuery(
    getStarships,
  );

  if (starshipLoading) return <Loading />;

  return <p>{allStarship && allStarship.getStarship[0].name}</p>;
}

it('renders without error', () => {
  renderer.create(
    <ApolloProvider client={client}>
      <Starships />
    </ApolloProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider>
      <Starships />
    </MockedProvider>,
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});
