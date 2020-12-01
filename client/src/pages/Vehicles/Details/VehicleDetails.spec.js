import { useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import { getVehicleByName } from '../../../Apollo/queries';
import Loading from '../../../components/Loading';

export function Vehicle({ name }) {
  const { data: vehicle, loading: vehicleLoading } = useQuery(
    getVehicleByName,
    {
      variables: { name: name },
    },
  );

  if (vehicleLoading) return <Loading />;

  return <p>{vehicle && vehicle.getVehicleByName[0].name}</p>;
}

it('renders without error', () => {
  renderer.create(
    <MockedProvider>
      <Vehicle name="Sand Crawler" />
    </MockedProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider>
      <Vehicle name="Sand Crawler" />
    </MockedProvider>,
  );
  const tree = component.toJSON();
  expect(tree.children).toBeTruthy;
});
