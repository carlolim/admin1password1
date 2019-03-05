import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardIndex from "../dashboard/dashboard-index";

class Routes extends Component {
    render() {
      return (
        <Switch>
            <Route path='/' component={DashboardIndex}/>
        </Switch>
      );
    }
}
  

export default Routes
