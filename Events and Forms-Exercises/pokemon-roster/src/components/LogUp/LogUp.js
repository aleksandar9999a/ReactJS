import React, { Component } from 'react';

export default class LogUp extends Component{
    render(){
        return (
            <div className='upForm'>
                <h1>Login from</h1>
                Email:
                <br />
                <input type='email' name='email' />
                <br />
                Password:
                <br />
                <input type='password' name='password' />
                <br />
                <button type='submit' >Log in</button>
            </div>
        )
    }
}