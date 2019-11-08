import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            checkbox: false
        }
    }

    handleChanges = (e) => {
        let type = e.target.type;
        let value = e.target.value

        if (type === 'checkbox') {
            value = e.target.checked;
        }

        this.setState({[type]: value});
    }

    render = () => (
        <div className='mx-5'>
            <h1>Log In</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleChanges} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handleChanges} />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" onChange={this.handleChanges} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    )
}