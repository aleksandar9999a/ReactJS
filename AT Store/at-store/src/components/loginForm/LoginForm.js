import React, { Component } from 'react';
import Login from './Login';
import Singin from './Signin';

export default class LoginForm extends Component {
    render = () => (
        <div class="row">
            <Login />
            <Singin />
        </div>
    )
}