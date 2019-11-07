import React, { Component } from 'react';
import CarouselIndicators from './CarouselIndicators';
import CarouselImage from './CarouselImage';
import CarouselButton from './CarouselButton';
import requester from '../../tools/requester';


export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { images: [] }
    }

    fetchImages = () => {
        requester
            .get('appdata', 'Carousel', 'kinvey')
            .then(console.log)
    }

    componentDidMount = () => {
        this.fetchImages();
    }

    render = () => {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <CarouselIndicators />
                </ol>
                <div className="carousel-inner">
                    <CarouselImage images={this.state.images} />
                </div>
                <CarouselButton slide="prev" spanClass="carousel-control-prev-icon" text='Previous' aClass="carousel-control-prev"/>
                <CarouselButton slide="next" spanClass="carousel-control-next-icon" text='Next' aClass="carousel-control-next"/>
            </div>
        )
    }
}