import React from 'react';
import { useQuery } from '@apollo/client';

import { getStarships } from '../../Apollo/queries';

import Loading from '../../components/Loading';
import Category from '../../components/Category';

const Starships = () => {
  const { data: allStarships, loading: starshipsLoading } = useQuery(
    getStarships,
  );

  return starshipsLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <Category items={allStarships.getStarships} link={'starships'} />
  );
};

export default Starships;
