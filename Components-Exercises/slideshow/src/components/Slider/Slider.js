import React, { Component } from 'react';
import fetcher from '../../fetcher';

const EPISODE_ENDPOINT = '/episodePreview/';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            id: null
        }
    }

    fetchEpisode = id => fetcher.get(EPISODE_ENDPOINT + id, data => this.setState(data));

    componentDidMount = () => {
        this.fetchEpisode(0);
    }

    render = () => (
        <div>
            <div className='warper'>
                <img className='slider-elem slider-button case-left' src='/left.png' title='previous' alt='nav' onClick={() => this.fetchEpisode(this.state.id - 1)} />
                <img className='sliderImg slider-elem' src={this.state.url} alt='episode' />
                <img className='slider-elem slider-button case-right' src='/right.png' title='next' alt='nav' onClick={() => this.fetchEpisode(this.state.id + 1)} />
            </div>
        </div>
    )
}