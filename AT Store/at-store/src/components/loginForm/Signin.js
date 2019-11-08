import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Singin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            checkbox: false
        }
    }

    validationInput = () => {
        const username = this.state.username;
        const email = this.state.email;
        const confirmEmail = this.state.confirmEmail;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        const checkbox = this.state.checkbox;

        const disabledBtn = (
            <Button variant="success" type="submit" disabled>
                Sign In
            </Button>
        )

        if (username === '' || username.length < 4) {
            return disabledBtn;
        }

        if (email === '' || confirmEmail === '' || email !== confirmEmail) {
            return disabledBtn;
        }

        if (password === '' || confirmPassword === '' || password !== confirmPassword) {
            return disabledBtn;
        }

        if (checkbox === false) {
            return disabledBtn;
        }

        return (
            <Button variant="success" type="submit" >
                Sign In
                </Button>
        )
    }

    handleChanges = (e) => {
        let type = e.target.name;
        let value = e.target.value;

        if (type === 'checkbox') {
            value = e.target.checked;
        }

        this.setState({ [type]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render = () => (
        <div className='mx-5'>
            <h1>Sign In</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name='username' type="text" placeholder="Enter username" onChange={this.handleChanges} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" onChange={this.handleChanges} />
                    <Form.Label>Confirm email address</Form.Label>
                    <Form.Control name='confirmEmail' type="email" placeholder="Confirm email" onChange={this.handleChanges} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" onChange={this.handleChanges} />
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control name='confirmPassword' type="password" placeholder="Confirm password" onChange={this.handleChanges} />
                </Form.Group>

                <Form.Group>
                    <Form.Check name='checkbox'
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        onChange={this.handleChanges} />
                </Form.Group>

                {this.validationInput()}
            </Form>
        </div>
    )
}