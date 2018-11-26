import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import Home from './components/home';
import Login from './components/login';
import Talent from './components/talent';
import Skills from './components/skills';
import NotFound from './components/404'

import rootReducer from './store'

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import './App.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class App extends Component {

  state = {
    authed: !(!document.cookie.replace(/(?:(?:^|.*;\s*)authHeaders\s*\=\s*([^;]*).*$)|^.*$/, "$1"))
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/login' component={Login} />
                <PrivateRoute authed={this.state.authed} path='/talent' component={Talent} />
                <PrivateRoute authed={this.state.authed} path='/skills' component={Skills} />
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