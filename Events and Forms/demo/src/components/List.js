import React, { Component } from 'react';

export default class List extends Component {

    render(){
        let items = this.props.items || [];
        return (
            <ul>
                {items.map(x => <li key={x.id}>{x.name}</li>)}
            </ul>
        )
    }
}