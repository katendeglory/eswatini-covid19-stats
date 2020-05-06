import React from 'react';
import ApolloClient, { HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';

const client = new ApolloClient({
  uri: 'https://covid19-graphql.now.sh/',
  fetch
})

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  );
}