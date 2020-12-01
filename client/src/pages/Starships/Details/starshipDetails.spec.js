import { useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import { getStarshipByName } from '../../../Apollo/queries';
import Loading from '../../../components/Loading';

export function Starship({ name }) {
  const { data: starship, loading: starshipLoading } = useQuery(
    getStarshipByName,
    {
      variables: { name: name },
    },
  );

  if (starshipLoading) return <Loading />;

  return <p>{starship && starship.getStarshipByName[0].name}</p>;
}

it('renders without error', () => {
  renderer.create(
    <MockedProvider>
      <Starship name="Star Destroyer" />
    </MockedProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider>
      <Starship name="Star Destroyer" />
    </MockedProvider>,
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});
