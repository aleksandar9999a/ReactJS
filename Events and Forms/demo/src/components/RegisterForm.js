import React, { Component } from 'react';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState(
            { value: e.target.value }
        )
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                UserName:
                <input type='text' name='username' onChange={this.onInputChange} />
                <br />
                <input type='submit' />
            </form>
        )
    }
}