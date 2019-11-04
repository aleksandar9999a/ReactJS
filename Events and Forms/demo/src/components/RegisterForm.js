import React, { Component } from 'react';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            },
            err: ''
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

        if (this.state.user.password.length < 8) {
            this.setState({err: 'Password must be more than 8 symbols!'});

            return;
        }
        else if(this.state.user.password.length > 20){
            this.setState({err: 'Password must be less than 20 symbols!'});

            return;
        }else{
            this.setState({err: ''});
            
            return;
        }
        
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>{this.state.err}</div>
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