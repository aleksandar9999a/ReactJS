import React, { Component } from 'react';

export default class LogUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginData: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.login = this.login.bind(this);
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login(e){
        e.preventDefault();
        if (this.state.email !== '' && this.state.password !== '') {
            let email = this.state.email;
            let password = this.state.password;
            fetch(
                'http://localhost:5000/auth/login',
                {
                    method: 'POST',
                    body: JSON.stringify({email, password}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(data => data.json())
            .then(res => this.setState({loginData: res}))
            console.log(this.state);
        }
        
        
    }

    render() {
        return (
            <div className='upForm'>
                <form onSubmit={this.login}>
                    <h1>Login from</h1>
                    Email:
                <br />
                    <input type='email' name='email' onChange={this.onInputChange} />
                    <br />
                    Password:
                <br />
                    <input type='password' name='password' onChange={this.onInputChange} />
                    <br />
                    <button type='submit' >Log in</button>
                </form>
            </div>
        )
    }
}