import React, { Component } from 'react';

export default class CarouselButton extends Component {
    render = () => (
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide={this.props.data-slide}>
            <span class={this.props.spanClass} aria-hidden="true"></span>
            <span class="sr-only">{this.props.text}</span>
        </a>
    )
}