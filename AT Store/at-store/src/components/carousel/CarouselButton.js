import React, { Component } from 'react';

export default class CarouselButton extends Component {
    render = () => (
        <a className={this.props.aClass} href="#carouselExampleIndicators" role="button" data-slide={this.props.slide}>
            <span className={this.props.spanClass} aria-hidden="true"></span>
            <span className="sr-only">{this.props.text}</span>
        </a>
    )
}