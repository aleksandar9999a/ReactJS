import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Products from '../products/Products';
import About from '../about/About';
import LoginForm from '../loginForm/LoginForm';

export default class MyRouters extends Component {
    render = () => (
        <div className='p-5 m-5'>
            <Switch>
                <Route path='/home' exact component={Home} />
                <Route path='/products' exact component={Products} />
                <Route path='/about' exact component={About} />
                <Route path='/login' exact component={LoginForm} />
            </Switch>
        </div>

    )
}