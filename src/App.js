import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import shopPage from './pages/shop/shop.component'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from '../src/components/header/header.component'

const HatsPage =()=>(
    <div>
      <h1>HATS PAGE</h1>
    </div>
);


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact patht="/shop" component={shopPage}/>
      </Switch>
    </div>
  );
}

export default App;
