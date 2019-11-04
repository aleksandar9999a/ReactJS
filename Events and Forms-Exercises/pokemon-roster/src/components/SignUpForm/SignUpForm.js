import React, { Component } from 'react';
import GenerateItems from './GenerateItems'

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            confirmEmail: '',
            username: '',
            password: '',
            confirmPassword: '',
            terms: false,
            message: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.sentData = this.sentData.bind(this);
        this.onClickCheckBox = this.onClickCheckBox.bind(this);
        this.afterRegistered = this.afterRegistered.bind(this);
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sentData(e) {
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        let name = this.state.username;

        if (this.isValidData()) {
            fetch(
                'http://localhost:5000/auth/signup',
                {
                    method: 'POST',
                    body: JSON.stringify({email, password, name}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(data => data.json())
            .then(this.afterRegistered)
        }
    }

    afterRegistered(res){
        this.setState({message: res.message})
    }

    isValidData() {
        if (this.state.email === '') {
            this.setState({ message: 'Type Email!' });
            return false;
        }
        else if (this.state.email !== this.state.confirmEmail) {
            this.setState({ message: 'Second Email is not the same!' });
            return false;
        }
        else if (this.state.username === '') {
            this.setState({ message: 'Type Username!' });
            return false;
        }
        else if (this.state.password === '') {
            this.setState({ message: 'Type password!' });
            return false;
        }
        else if (this.state.password !== this.state.confirmPassword) {
            this.setState({ message: 'Second password is not the same!' });
            return false;
        }
        else if (this.state.terms === false) {
            this.setState({ message: 'Agree with Terms!' });
            return false;
        }

        this.setState({ message: '' });
        return true;
    }

    onClickCheckBox(e) {
        if (e.target.checked === true) {
            this.setState({
                terms: true
            })
        } else {
            this.setState({
                terms: false
            })
        }
    }

    render() {
        return (
            <div className='upForm'>
                <form onSubmit={this.sentData}>
                    <h1>Sign Up</h1>
                    <GenerateItems type='email' name='email' titleOn='Email:' onChange={this.onInputChange} />
                    <GenerateItems type='email' name='confirmEmail' titleOn='Confirm Email:' onChange={this.onInputChange} />
                    <GenerateItems type='text' name='username' titleOn='Username:' onChange={this.onInputChange} />
                    <GenerateItems type='password' name='password' titleOn='Password:' onChange={this.onInputChange} />
                    <GenerateItems type='password' name='confirmPassword' titleOn='Confirm Password:' onChange={this.onInputChange} />
                    <input type='checkbox' name='terms' onChange={this.onClickCheckBox} /> I agree with the terms
                    <br />
                    <button type='submit' >Sign Up</button>
                </form>
                <div>{this.state.message}</div>
            </div>
        )
    }
}