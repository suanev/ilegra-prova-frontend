import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider, useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';

import client from '../../Apollo/client';
import { getPlanets } from '../../Apollo/queries';
import Loading from '../../components/Loading';

export function Planets () {
  const { data: allPlanets, loading: planetsLoading } = useQuery(getPlanets);

  if (planetsLoading) return (<Loading />);

return <p>{allPlanets && allPlanets.getPlanets[0].name}</p>;
}

it('renders without error', () => {
  renderer.create(
    <ApolloProvider client={client}>
      <Planets />
    </ApolloProvider>,
  );
});

it("should render loading state initially", () => {
  const component = renderer.create(
    <MockedProvider>
      <Planets />
    </MockedProvider>
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});
