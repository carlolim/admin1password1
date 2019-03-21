import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardIndex from "../dashboard/dashboard-index";
import PersonalInfo from "../personal/details";


class Routes extends Component {
    render() {
      return (
        <Switch>
            <Route exact path='/' component={DashboardIndex}/>
            <Route exact path='/personal' component={PersonalInfo}/>
        </Switch>
      );
    }
}
  

export default Routes
