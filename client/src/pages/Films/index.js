import React from 'react';
import { useQuery } from '@apollo/client';

import { getFilms } from '../../Apollo/queries';

import Loading from '../../components/Loading';
import Category from '../../components/Category';

const Films = () => {
  const { data: allFilms, loading: filmsLoading } = useQuery(getFilms);

  return filmsLoading ? (
    <Loading paddingVertical={250} />
  ) : (
    <Category items={allFilms.getFilms} link={'films'} />
  );
};

export default Films;
