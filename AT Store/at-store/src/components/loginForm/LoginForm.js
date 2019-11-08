import React, { Component } from 'react';
import Login from './Login';
import Singin from './Signin';

export default class LoginForm extends Component {
    render = () => (
        <div className="row justify-content-center border p-5">
            <Login />
            <Singin />
        </div>
    )
}