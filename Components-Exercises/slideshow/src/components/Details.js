import React, { Component } from 'react';

export default class Details extends Component {
    render = () => (
        <section id='bio'>
            <div className='image'>
                <img src={this.props.url} alt='' />
            </div>
            <div className='info'>
                <p>Name: <strong>{this.props.name}</strong></p>
                <p>Bio: {this.props.bio}</p>
                <p></p>
            </div>
        </section>
    )
}