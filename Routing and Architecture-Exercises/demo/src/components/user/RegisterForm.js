import React, { Component } from 'react';
import requester from '../../infrastructure/requester';

export default class RegisterForm extends Component {
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
            .post('user', '', 'basic', this.state)
            .then(console.log)
    }

    render = () => (
        <form id="registerForm" onSubmit={this.handleSubmit}>
            <h2>Register</h2>
            <label>Username:</label>
            <input name="username" onChange={this.handleChange} type="text" />
            <label>Password:</label>
            <input name="password"  onChange={this.handleChange} type="password" />
            <label>Repeat Password:</label>
            <input name="repeatPass" onChange={this.handleChange} type="password" />
            <input id="btnRegister" type="submit" value="Sign Up" />
        </form>
    )
}