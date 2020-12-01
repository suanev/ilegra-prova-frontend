import { useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import { getFilmByName } from '../../../Apollo/queries';
import Loading from '../../../components/Loading';

export function Character({ name }) {
  const { data: person, loading: personLoading } = useQuery(getFilmByName, {
    variables: { name: name },
  });

  if (personLoading) return <Loading />;

  return <p>{person && person.getFilmByName[0].title}</p>;
}

it('renders without error', () => {
  renderer.create(
    <MockedProvider>
      <Character name="A new hope" />
    </MockedProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider >
      <Character name="A new hope" />
    </MockedProvider>,
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});