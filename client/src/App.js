import React, {Component} from 'react';
import './App.css';
import CrimeList from './Components/Listings/CrimeList.jsx';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import TableComp from './Components/Table/Table'
import SimpleMap from  './Components/Listings/SimpleMap'
class App extends Component {
  constructor(){
    super();
    this.state={
      test: ""
      
    }

  }
  render(){

 
  return (
    <div className="App">
      <Switch>
      <Route exact path={"/"} component ={Home}>
        </Route>
        <Route path ="/crimes" component ={CrimeList}>
        </Route>
        <Route path ="/listings" component ={TableComp}>
        </Route>
        <Route path ="/map" component ={SimpleMap}>
        </Route>
      </Switch>
   <Footer/>
    </div>
  );
}
}

export default App;
