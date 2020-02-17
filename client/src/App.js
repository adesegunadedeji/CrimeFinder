import React from 'react';
import './App.css';
import CrimeSearch from './Components/Listings/CrimeList';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Switch>
      <Route path ="/home" component ={Home}>
        </Route>
        <Route path ="/crimes" component ={CrimeSearch}>
        </Route>
      </Switch>
   <Footer/>
    </div>
  );
}

export default App;
