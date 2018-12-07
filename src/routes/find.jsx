import React from 'react';

import { Link, Redirect, Route, Switch, Router } from 'react-router-dom';
import Talent from './talent';
import NotFound from './404';
import Job from './job';

class Find extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard/find/job" component={Job} />
          <Route path="/dashboard/find/talent" component={Talent} />
          <Redirect from="/dashboard/find" to="/dashboard/find/talent" />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Find;
