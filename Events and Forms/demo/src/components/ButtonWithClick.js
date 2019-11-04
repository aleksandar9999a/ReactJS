import React, {Component} from 'react';

export default class ButtonWithClick extends Component {
    onButtonClick = () => {
        console.log(this.props.name)
    }

    render() {
        return (
            <button onClick={this.onButtonClick}>Click Me!</button>
        )
    }
}