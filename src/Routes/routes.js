import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Privateroute from './Privateroute';
import List from '../pages/List';
import Login from '../pages/Login';
import Detail from '../pages/Detail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/login" component={Login} />
      <Privateroute path="/detail" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
