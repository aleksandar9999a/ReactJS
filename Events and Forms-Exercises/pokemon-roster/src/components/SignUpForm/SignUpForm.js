import React, { Component } from 'react';
import GenerateItems from './GenerateItems'

export default class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            terms: false
        }
    }
    render() {
        return (
            <div className='upForm'>
                <h1>Sign Up</h1>
                <GenerateItems type='email' name='email' titleOn='Email:' />
                <GenerateItems type='email' name='confirmEmail' titleOn='Confirm Email:' />
                <GenerateItems type='text' name='username' titleOn='Username:' />
                <GenerateItems type='password' name='password' titleOn='Password:' />
                <GenerateItems type='password' name='confirmPassword' titleOn='Confirm Password:' />
                <br />
                <GenerateItems type='checkbox' name='terms' titleOn='I agree with the terms' />
                <br />
                <button type='submit' >Sign Up</button>
            </div>
        )
    }
}