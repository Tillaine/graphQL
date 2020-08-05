import React from 'react';
import './App.css';
// import logo from './CCLogo.jpg'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Posts from './components/Posts.js';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Charter Stories</h1>
        <Posts/>
      </div>
    </ApolloProvider>
  );
}

export default App;
