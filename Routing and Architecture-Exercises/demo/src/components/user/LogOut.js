import React, { Component } from 'react';
import requester from '../../infrastructure/requester';
import { Redirect } from 'react-router-dom';

export default class LogOut extends Component {
    logout = () => {
        requester
            .post('user', '_logout', 'kinvey')
            .then(res => sessionStorage.removeItem('authtoken'))
    }

    render = () => <Redirect to='/' />
}