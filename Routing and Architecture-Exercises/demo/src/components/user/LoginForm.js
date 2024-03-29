import React, { Component } from 'react';
import requester from '../../infrastructure/requester';
import observer from '../../infrastructure/observer';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }

    handleChange = e => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;

        this.setState({ [fieldName]: fieldValue });
    }

    handleSubmit = e => {
        e.preventDefault();

        requester
            .post('user', 'login', 'basic', this.state)
            .then(res => {
                observer.trigger(observer.events.loginUser, res.username)
                observer.trigger(observer.events.notification, { type: 'success', message: 'Login is successful!' })
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
            })
            .catch(res => observer.trigger(observer.events.notification, { type: 'error', message: 'Incorrect username or password!' }))
    }

    render = () => (
        <form id="loginForm" onSubmit={this.handleSubmit}>
            <h2>Sign In</h2>
            <label>Username:</label>
            <input name="username" onChange={this.handleChange} type="text" />
            <label>Password:</label>
            <input name="password" onChange={this.handleChange} type="password" />
            <input id="btnLogin" type="submit" value="Sign In" />
        </form>
    )
}