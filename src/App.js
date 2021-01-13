import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import AddInventory from "./components/AddInventory/AddInventory";
import './css/App.scss';

function App() {


  return (
    <Router>
      <Navbar/>

      <div className="app">
        <Switch>
          <Route path="/" render={() => (<AddInventory/>)} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
