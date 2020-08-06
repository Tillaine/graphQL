import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Posts from './components/Posts.js';
import Post from './components/Post.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UpdateForm from './components/UpdateForm';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <h1>Charter Stories</h1>
          <Route exact path="/" component={Posts}/>
          <Route exact path="/post/:postID" component={Post}/>
          <Route exact path="/update/:id" component={UpdateForm}/>
        </div>
        <a href='https://github.com/login/oauth/authorize/client_id=8b2f27030f8ffa0a7e8d'>Sign In</a>
      </Router>
    </ApolloProvider>
  );
}

export default App;
