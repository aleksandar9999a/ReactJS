import React, { Component } from 'react';

export default class Rooster extends Component {
    render = () => {
        const images = this.props.images.map(x => (<img className='rosterImg' src={x.url} alt='' key={x.id} onClick={() => this.props.select(x.id)}/>))
        return (
            <div className='roster'>
                {images}
            </div>
        )
    }
}