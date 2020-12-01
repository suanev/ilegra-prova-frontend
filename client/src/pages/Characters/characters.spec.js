import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider, useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';

import client from '../../Apollo/client';
import { getPersons } from '../../Apollo/queries';
import Loading from '../../components/Loading';

export function Characters() {
  const { data: allPersons, loading: personsLoading } = useQuery(getPersons);

  if (personsLoading) return <Loading />;

  return <p>{allPersons && allPersons.getPersons[0].name}</p>;
}

it('renders without error', () => {
  renderer.create(
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider>
      <Characters />
    </MockedProvider>,
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});
