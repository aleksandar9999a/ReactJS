import React, { Component } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import requester from '../../tools/requester';

export default class LogButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginBtn: <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Log In/Sing In</Link>,
            logOutBtn: <Button variant="outline-danger" onClick={this.logOut}>Log Out</Button>
        }
    }

    logOut = () => {
        requester
            .post('user', '_logout', 'kinvey')
            .then(res => {
                sessionStorage.removeItem('authtoken')
                window.location.reload()
            })
    }

    render = () => (
        <Nav>
            {this.state[this.props.type]}
        </Nav>
    )
}