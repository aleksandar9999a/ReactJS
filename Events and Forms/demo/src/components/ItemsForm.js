import React, { Component } from 'react';

export default class ItemsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            err: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onItemSaved = this.onItemSaved.bind(this);
    }

    onInputChange(e) {
        this.setState({ itemName: e.target.value });
    }

    onItemSaved(e) {
        e.preventDefault();
        if (this.state.itemName !== '') {
            this.setState({err: ''});
            this.props.addItem(this.state.itemName);
        }else{
            this.setState({err: 'Type something!'});

            return;
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onItemSaved}>
                    Item Name:
                <input type='text' name='name' onChange={this.onInputChange} value={this.state.itemName} />
                    <br />
                    <input type='submit' />
                </form>
                <div>{this.state.err}</div>
            </div>
        )
    }
}