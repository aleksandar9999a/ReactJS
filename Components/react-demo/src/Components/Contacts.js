import React, { Component } from 'react'
import './Contacts.css';

class Contacts extends Component {
    render() {
        return <a href={this.props.link}><img src={this.props.imgSrc} alt=''></img>{this.props.user}</a>
    }
}

export default Contacts;