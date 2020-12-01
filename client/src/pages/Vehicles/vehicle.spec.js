import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider, useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';

import client from '../../Apollo/client';
import { getVehicles } from '../../Apollo/queries';

import Loading from '../../components/Loading';

export function Vehicles() {
  const { data: allVehicles, loading: vehiclesLoading } = useQuery(getVehicles);

  if (vehiclesLoading) return <Loading />;

  return <p>{allVehicles && allVehicles.getVehicles[0].name}</p>;
}

it('renders without error', () => {
  renderer.create(
    <ApolloProvider client={client}>
      <Vehicles />
    </ApolloProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider>
      <Vehicles />
    </MockedProvider>,
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});
