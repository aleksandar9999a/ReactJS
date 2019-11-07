import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Products from '../products/Products';
import About from '../about/About';
import LoginForm from '../loginForm/LoginForm';

export default class Container extends Component {
    render = () => (
            <Switch>
            <Route patch="/products" component={Home} />
                <Route patch="/products" component={Products} />
                <Route patch="/about" component={About} />
                <Route patch="/login" component={LoginForm} />
            </Switch>
    )
}