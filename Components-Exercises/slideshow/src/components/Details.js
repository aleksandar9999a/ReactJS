import React, { Component } from 'react';

export default class Details extends Component {
    render = () => (
        <div className='bio'>
                <img src={this.props.url} className='bioImage' alt='' />
            <div className='info'>
                <p>Name: <strong>{this.props.name}</strong></p>
                <p>Bio: {this.props.bio}</p>
                <p></p>
            </div>
        </div>
    )
}