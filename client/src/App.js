import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/screen/Home'
import Signin from './components/screen/Signin'
import Signup from './components/screen/Signup'
import Profile from './components/screen/Profile'  

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
