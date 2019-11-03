import React, { Component } from 'react'
import './Names.css'

class Welcome extends Component {
    render() {
        let firstName = this.props.firstName || 'No one is here';
        let lastName = this.props.lastName || 'No one is here'
        return (
            <div className="names">
                <h1>{firstName} {lastName}</h1>
            </div>
        )
    }
}

export default Welcome;
