import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'  

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <Route path="/">
              <Home />
          </Route>
          <Route path="/signin">
              <Signin />
          </Route>
          <Route path="/signup">
              <Signup />
          </Route>
          <Route path="/profile">
              <Profile />
          </Route>
      </BrowserRouter>
  );
}

export default App;
