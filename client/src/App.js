import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Pet from './pages/Pet'
import PetSignup from './pages/PetSignup';


// todo add axios import here (axios dependancy has been installed)



// todo construct axios fetch function here
/*useEffect(()=>{
  axios.get(*insert url here*)
  .then(response)=>console.log(response.data)
},[]);

return(
  <div>
     *fetched data*
     <div>
);

*/
//todo above boiler plate may need to be moved into the app function.

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/signup"
                element={<Signup />}
              />
              <Route 
                path="/petsignup"
                element={<PetSignup />}
              />
              <Route 
                path="/Gallery"
                element={<Gallery />}
              />
              <Route 
                path="/me"
                element={<Profile />}
              />
              <Route 
                path="/pets/:petId"
                element={<Pet />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
        
      </Router>
    </ApolloProvider>
  );
}

export default App;
