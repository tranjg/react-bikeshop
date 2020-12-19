import React from 'react';
import Header from './Header';
import Home from './Home';
import Schedule from './Schedule';
import {  HashRouter, Switch, Route } from 'react-router-dom';
import Inventory from './Inventory';
import Customers from './Customers';

function App() {
    return (
        <>
          <Header />
          <HashRouter>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/schedule">
                  <Schedule />
              </Route>
              <Route exact path="/inventory">
                  <Inventory />
              </Route>
              <Route exact path="/customers">
                  <Customers />
              </Route>
          </Switch>
          </HashRouter>
        </>
    )

}

export default App;
