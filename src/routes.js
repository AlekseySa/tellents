import React from 'react'
import { Route } from 'react-router'
import App from './App';
import Home from './components/home';
import Talent from './components/talent'

export const routes = (
    <div>
        <Route exact path='/' component={App} />
        <Route path='/home' component={Home} />
        <Route path='/talent' component={Talent} />
    </div>
)