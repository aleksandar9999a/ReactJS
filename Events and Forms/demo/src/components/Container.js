import React, { Component } from 'react';
import List from './List' ;
import ItemsForm from './ItemsForm';

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(name){
        this.setState(prevState => {
            let items = prevState.items;
            items.push({id: items.length + 1, name});
            return {items}
        })
    }

    render(){
        return (
            <div>
                <h1>My Page</h1>
                <List items={this.state.items}/>
                <ItemsForm addItem={this.addItem}/>
            </div>
        )
    }
}