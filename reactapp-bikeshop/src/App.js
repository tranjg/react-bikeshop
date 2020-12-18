import React from 'react';
import Header from './Header';
import Home from './Home'
import { Switch, Route } from "react-router-dom";
import {Container} from "@material-ui/core";

function App() {
    return (
        <>
          <Header />
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/schedule">
                  <h1>Schedule</h1>
              </Route>
              <Route exact path="/inventory">
                  <h1>Inventory</h1>
              </Route>
              <Route exact path="/customers">
                  <h1>Customers</h1>
              </Route>
          </Switch>
        </>
    )

}

export default App;
