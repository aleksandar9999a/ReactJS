import React, { Component } from 'react';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        let user = this.state.user;
        let inputName = e.target.name;
        let inputValue = e.target.value;

        user[inputName] = inputValue;

        this.setState({user});
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                UserName:
                <input type='text' name='username' value={this.state.user.username} onChange={this.onInputChange} />
                <br />
                Password:
                <input type='password' name='password' value={this.state.user.password} onChange={this.onInputChange} />
                <br />
                <input type='submit' />
            </form>
        )
    }
}