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
            error: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.sentData = this.sentData.bind(this);
        this.onClickCheckBox = this.onClickCheckBox.bind(this);
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sentData(e){
        e.preventDefault();
        console.log(this.state);
        if (this.state.email === '') {
            this.setState({error: 'Type Email!'})
        }
        else if(this.state.email !== this.state.confirmEmail){
            this.setState({error: 'Second Email is not the same!'})
        }
        else if(this.state.username === ''){
            this.setState({error: 'Type Username!'})
        }
        else if(this.state.password === ''){
            this.setState({error: 'Type password!'})
        }
        else if(this.state.password !== this.state.confirmPassword){
            this.setState({error: 'Second password is not the same!'})
        }
        else if(this.state.terms === false){
            this.setState({error: 'Agree with Terms!'})
        }else{
            this.setState({error: ''})
        }
    }

    onClickCheckBox(e){
        if (e.target.checked === true) {
            this.setState({
                terms: true
            })
        }else{
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
                    <input type='checkbox' name='terms' onChange={this.onClickCheckBox}/> I agree with the terms
                    <br />
                    <button type='submit' >Sign Up</button>
                </form>
                <div>{this.state.error}</div>
            </div>
        )
    }
}