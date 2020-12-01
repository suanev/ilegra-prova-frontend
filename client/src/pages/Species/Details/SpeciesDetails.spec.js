import { useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import { getSpeciesByName } from '../../../Apollo/queries';
import Loading from '../../../components/Loading';

export function Species({ name }) {
  const { data: species, loading: speciesLoading } = useQuery(getSpeciesByName, {
    variables: { name: name },
  });

  if (speciesLoading) return <Loading />;

  return <p>{species && species.getSpeciesByName[0].name}</p>;
}

it('renders without error', () => {
  renderer.create(
    <MockedProvider>
      <Species name="Human" />
    </MockedProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider >
      <Species name="Human" />
    </MockedProvider>,
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});