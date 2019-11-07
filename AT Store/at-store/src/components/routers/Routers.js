import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from '../loginForm/LoginForm';
import Home from '../home/Home';
import Products from '../products/Products';
import About from '../about/About';

export default class Routers extends Component{
    render = () => (
        <Switch>
            <Route patch="/home" component={Home} />
            <Route patch="/products" component={Products} />
            <Route patch="/about" component={About} />
            <Route patch="/login" component={LoginForm} />
        </Switch>
    )
}