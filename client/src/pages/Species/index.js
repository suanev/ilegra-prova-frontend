import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { getSpecies } from '../../Apollo/queries';

import Category from '../../components/Category';
import Loading from '../../components/Loading';

const Species = () => {
  const { data: allSpecies, loading: speciesLoading } = useQuery(getSpecies);

  return speciesLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <Category items={allSpecies.getSpecies} link={'species'} />
  );
};

export default Species;
