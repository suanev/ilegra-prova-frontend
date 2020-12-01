import React from 'react';
import { useQuery } from '@apollo/client';

import { getPersons } from '../../Apollo/queries';

import Loading from '../../components/Loading';
import Category from '../../components/Category';

const Characters = () => {
  const { data: allPersons, loading: personsLoading } = useQuery(getPersons);

  return personsLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <Category items={allPersons.getPersons} link={'characters'} />
  );
};

export default Characters;
