import gql from "graphql-tag";
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
});

export const GET_CHARACTERS = gql`
  query($searchQuery: String!) {
    characters(filter: { name: $searchQuery }) {
      results {
        name
        id
        image
        status
      }
    }
  }`
;