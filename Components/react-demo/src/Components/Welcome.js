import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        let title = this.props.title || 'No one is here';
        let subtitle = this.props.subtitle || 'Nqma go we'
        return (
            <div>
                <h1>{title}</h1>
                <h1>{subtitle}</h1>
            </div>
        )
    }
}

export default Welcome;
