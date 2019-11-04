import React, { Component } from 'react';

export default class GenerateItems extends Component{
    render(){
        return (
            <div>
                {this.props.titleOn}
                <br />
                <input type={this.props.type} name='email' />
            </div>
        )
    }
}