import React, { Component } from 'react';

export default class CarouselImage extends Component {
    generateImgTag = ({ url }) => <img src={url} class="d-block w-100" alt="..." />

    render = () => {
        const images = this.props.images(generateImgTag);
        return (
            <div class="carousel-item active">
                {images}
            </div>
        )
    }
}