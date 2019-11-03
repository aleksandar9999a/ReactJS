import React, { Component } from 'react';
import Rooster from './Rooster';
import Details from './Details';
import fetcher from '../fetcher';

const ROOSTER_ENDPOINT = '/roster';

export default class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            details: {
                name: null,
                id: null,
                url: null,
                bio: null
            }
        }
    }

    fetchRoster = () =>
        fetcher.get(ROOSTER_ENDPOINT,
            data =>
                this.setState({ images: data.map(x => ({ id: x.id, url: x.url })) })
        )

    componentDidMount = () => {
        this.fetchRoster();
    }

    render = () => (
        <div>
            <Rooster images={this.state.images} />
            <Details {...this.state.details} />
        </div>
    )
}