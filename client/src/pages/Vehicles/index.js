import React from 'react';
import { useQuery } from '@apollo/client';

import { getVehicles } from '../../Apollo/queries';

import Loading from '../../components/Loading';
import Category from '../../components/Category';

const Vehicles = () => {
  const { data: allVehicles, loading: vehiclesLoading } = useQuery(getVehicles);

  return vehiclesLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <Category items={allVehicles.getVehicles} link={'vehicles'} />
  );
};

export default Vehicles;
