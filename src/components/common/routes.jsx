import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardIndex from "../dashboard/dashboard-index";
import PersonalInfo from "../personal/details";
import PersonalInfoList from "../personal/index";
import NewPersonalInfo from "../personal/new";


class Routes extends Component {
    render() {
      return (
        <Switch>
            <Route exact path='/' component={DashboardIndex}/>
            <Route exact path='/personal' component={PersonalInfoList}/>
            <Route exact path='/personal/new' component={NewPersonalInfo}/>
            <Route exact path='/personal/:id' component={PersonalInfo}/>
        </Switch>
      );
    }
}
  

export default Routes
