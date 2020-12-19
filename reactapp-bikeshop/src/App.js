import React from 'react';
import {  HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Schedule from './Schedule';
import Inventory from './Inventory';
import Customers from './Customers';

export default function App() {
    return (
        <>
        <HashRouter>
          <Header />
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/schedule" component={Schedule}/>
              <Route exact path="/inventory" component={Inventory}/>
              <Route exact path="/customers" component={Customers}/>
          </Switch>
        </HashRouter>
        </>
    )

}


