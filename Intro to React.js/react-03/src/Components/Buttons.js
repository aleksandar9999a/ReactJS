import React, {Component} from 'react';

class Buttons extends Component{
    constructor(props){
        super(props);

        this.btnClicked = this.btnClicked.bind(this);

        this.state = {
            count: 0
        }
    }

    btnClicked(){
        this.setState(prevState => ({
            count: ++prevState.count
        }))
    }
    render(){
        return <button onClick={this.btnClicked}>{this.props.text} - Clicked {this.state.count}</button>
    }
}

export default Buttons;