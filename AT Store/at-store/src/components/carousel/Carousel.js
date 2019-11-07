import React, { Component } from 'react';
import CarouselIndicators from './CarouselIndicators';
import CarouselImage from './CarouselImage';
import CarouselButton from './CarouselButton';


export default class Carousel extends Component {
    render = () => (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <CarouselIndicators />
            </ol>
            <div class="carousel-inner">
                <CarouselImage />
            </div>
            <CarouselButton data-slide="prev" spanClass="carousel-control-prev-icon" text='Previous' />
            <CarouselButton data-slide="next" spanClass="carousel-control-next-icon" text='Next' />
        </div>
    )
}