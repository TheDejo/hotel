import React from 'react';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRooms from './pages/SingleRooms';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

import './App.css'

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>  
     <Route path="/" exact component={Home} /> 
     <Route path="/rooms" exact component={Rooms} /> 
     <Route path="/rooms/:slug" exact component={SingleRooms} /> 
     <Route component={Error}/>
    </Switch>
    </>
  );
};

export default App;