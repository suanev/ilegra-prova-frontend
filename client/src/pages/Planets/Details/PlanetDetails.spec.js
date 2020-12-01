import { useQuery } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import { getPlanetByName } from '../../../Apollo/queries';
import Loading from '../../../components/Loading';

function Planet({ name }) {
  const { data: planet, loading: planetLoading } = useQuery(getPlanetByName, {
    variables: { name: name },
  });

  if (planetLoading) return <Loading />;

  return <p>{planet && planet.getPlanetByName[0].name}</p>;
}

it('renders without error', () => {
  renderer.create(
    <MockedProvider>
      <Planet name="Tatooine" />
    </MockedProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider>
      <Planet name="Tatooine" />
    </MockedProvider>,
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});