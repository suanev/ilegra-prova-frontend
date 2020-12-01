import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider, useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';

import client from '../../Apollo/client';
import { getFilms } from '../../Apollo/queries';
import Loading from '../../components/Loading';

export function Films () {
  const { data: allFilms, loading: planetsLoading } = useQuery(getFilms);

  if (planetsLoading) return (<Loading />);

return <p>{allFilms && allFilms.getFilms[0].title}</p>;
}

it('renders without error', () => {
  renderer.create(
    <ApolloProvider client={client}>
      <Films />
    </ApolloProvider>,
  );
});

it("should render loading state initially", () => {
  const component = renderer.create(
    <MockedProvider>
      <Films />
    </MockedProvider>
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});
