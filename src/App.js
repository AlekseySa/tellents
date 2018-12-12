import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './routes/home';
import Talent from './routes/talent';
import Job from './routes/job';
import Skills from './routes/skills';
import NotFound from './routes/404';
import Dashboard from './routes/dashboard';

/* import rootReducer from './store' */
import rootReducer from './reducers/index';

import './App.css';

const store = createStore(rootReducer, applyMiddleware(thunk));
function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
        )
      }
    />
  );
}

class App extends Component {
  state = {
    authed: !!JSON.parse(localStorage.getItem('user')),
  };

  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <PrivateRoute authed={this.state.authed} path="/dashboard" component={Dashboard} />
                <PrivateRoute authed={this.state.authed} path="/dashboard/find/talent" component={Talent} />
                <PrivateRoute authed={this.state.authed} path="/dashboard/find/job" component={Job} />
                <PrivateRoute authed={this.state.authed} path="/dashboard/your-office/skills" component={Skills} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
