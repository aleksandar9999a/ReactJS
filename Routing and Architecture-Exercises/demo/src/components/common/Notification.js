import React, { Component } from 'react';
import observer from '../../infrastructure/observer';
import './../../style/notifications.css'

const DEFAULT_STATE = {
    type: null,
    message: null
}

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;

        observer.subscribe(observer.events.notification, this.showNotification)
    }

    showNotification = data => {
        let message = data.message;
        let type = data.type;
        this.setState({ type, message})
    }

    hideNotification = ev => this.setState(DEFAULT_STATE);

    render = () => {
        if (this.state.type === 'success') {
            return <div id='successBox' className="notification">{this.state.message}</div>
        }

        if (this.state.type === 'error') {
            return <div id='errorBox' className="notification">{this.state.message}</div>
        } 

        if (this.state.type === 'loading') {
            return <div id='loadingBox' className="notification">{this.state.message}</div>
        }

        return null;
    }
}