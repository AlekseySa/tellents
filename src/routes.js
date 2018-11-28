import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Home from './routes/home';
import Talent from './routes/talent';

export const routes = (
  <div>
    <Route exact path='/' component={App} />
    <Route path='/home' component={Home} />
    <Route path='/talent' component={Talent} />
  </div>
);