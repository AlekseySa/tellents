import React from 'react';

import Skills from './skills';
import NotFound from './404';

import { Link, Redirect, Route, Switch, Router } from 'react-router-dom';

class YourOffice extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/dashboard/your-office/skills' component={Skills} />
          <Redirect from="" to="/dashboard/your-office/skills" />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default YourOffice;