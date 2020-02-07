import React from 'react';
import './App.css';
import CrimeSearch from './Components/Listings/CrimeList';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/NavbarComp';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route path ="/home" component ={Home}>
        </Route>
        <Route path ="/crimes" component ={CrimeSearch}>
        </Route>
      </Switch>
   
    </div>
  );
}

export default App;
