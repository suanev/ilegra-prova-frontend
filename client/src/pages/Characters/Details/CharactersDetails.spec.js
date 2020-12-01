import { useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import { getPersonByName } from '../../../Apollo/queries';
import Loading from '../../../components/Loading';

export function Character({ name }) {
  const { data: person, loading: personLoading } = useQuery(getPersonByName, {
    variables: { name: name },
  });

  if (personLoading) return <Loading />;

  return <p>{person && person.getPersonByName[0].name}</p>;
}

it('renders without error', () => {
  renderer.create(
    <MockedProvider>
      <Character name="Luke Skywalker" />
    </MockedProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider >
      <Character name="Luke Skywalker" />
    </MockedProvider>,
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});