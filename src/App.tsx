import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import MainPage from './pages/MainPage';
import {client} from './service';

function App() {

  return (
    <ApolloProvider client={client}>
        <MainPage/>
    </ApolloProvider>
  );
}

export default App;
