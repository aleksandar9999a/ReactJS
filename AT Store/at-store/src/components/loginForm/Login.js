import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import requester from './../../tools/requester';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    validationInput = () => {
        const username = this.state.username;
        const password = this.state.password;

        if (username !== '' && password !== '') {
            return (
                <Button variant="success" type="submit" >
                    Log In
                </Button>
            )
        } else {
            return (
                <Button variant="success" type="submit">
                    Log In
                </Button>
            )
        }
    }

    handleChanges = (e) => {
        let type = e.target.name;
        let value = e.target.value

        this.setState({ [type]: value });
        console.log(this.state);
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        requester
            .post('user', 'login', 'basic', this.state)
            .then(console.log)

    }

    render = () => (
        <div className='mx-5'>
            <h1>Log In</h1>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name='username' type="text" placeholder="Enter username" onChange={this.handleChanges} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" onChange={this.handleChanges} />
                </Form.Group>

                {this.validationInput()}
            </Form>
        </div>
    )
}