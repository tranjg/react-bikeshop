import React from 'react';
import Header from './Header';
import Home from './Home';
import Schedule from './Schedule';
import { Switch, Route } from 'react-router-dom';
import Inventory from './Inventory';
import Customers from './Customers';

function App() {
    return (
        <>
          <Header />
          <Switch>
              <Route exact path="/react-bikeshop/">
                  <Home />
              </Route>
              <Route exact path="/react-bikeshop//schedule">
                  <Schedule />
              </Route>
              <Route exact path="/react-bikeshop//inventory">
                  <Inventory />
              </Route>
              <Route exact path="/react-bikeshop//customers">
                  <Customers />
              </Route>
          </Switch>
        </>
    )

}

export default App;
