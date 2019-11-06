import React, { Component } from 'react';
import requester from '../../infrastructure/requester';

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

    }
}