import React from 'react';
import { Routes } from './routes';
import { ApolloProvider } from '@apollo/client';

import client from './Apollo/client';

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

export default App;
