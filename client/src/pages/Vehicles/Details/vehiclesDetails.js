import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getVehicleByName } from '../../../Apollo/queries';
import Loading from '../../../components/Loading';

const VehiclesDetails = () => {
  const { name } = useParams();

  const { data: vehicles, loading: vehiclesLoading } = useQuery(
    getVehicleByName,
    {
      variables: { name: name },
    },
  );
  return vehiclesLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <section className="container">
      {vehicles &&
        vehicles.getVehicleByName.map(vehicle => (
          <div className="details__container" key={vehicle.name}>
            <h1 className="details__title">{vehicle.name}</h1>
            <h2 className="details__title__section">Characteristics:</h2>
            <div className="details__info">
              <div className="info">
                <p>
                  <span className="bold">Model:</span> {vehicle.model}
                </p>
                <p>
                  <span className="bold">Manufacturer:</span>{' '}
                  {vehicle.manufacturers}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Cost in credits: </span>{' '}
                  {vehicle.cost_in_credits}
                </p>
                <p>
                  <span className="bold">Length:</span> {vehicle.length}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Max atmosphering speed:</span>{' '}
                  {vehicle.max_atmosphering_speed}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Crew:</span> {vehicle.crew}
                </p>
                <p>
                  <span className="bold">Passengers:</span> {vehicle.passengers}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="bold">Cargo_capacity:</span>{' '}
                  {vehicle.cargo_capacity}
                </p>
                <p>
                  <span className="bold">Vehicle class:</span>{' '}
                  {vehicle.vehicle_class}
                </p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default VehiclesDetails;
