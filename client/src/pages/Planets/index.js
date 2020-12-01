import React from 'react';
import { useQuery } from '@apollo/client';

import { getPlanets } from '../../Apollo/queries';

import Category from '../../components/Category';
import Loading from '../../components/Loading';

const Planets = () => {
  const { data: allPlanets, loading: planetsLoading } = useQuery(getPlanets);

  return planetsLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <Category items={allPlanets.getPlanets} link={'planets'} />
  );
};

export default Planets;
