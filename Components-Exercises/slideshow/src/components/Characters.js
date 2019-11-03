import React, { Component } from 'react';
import Rooster from './Rooster';
import Details from './Details';
import fetcher from '../fetcher';

const ROOSTER_ENDPOINT = '/roster';
const DETAILS_ENDPOINT = '/character/';

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
            data => this.setState({ images: data.map(x => ({ id: x.id, url: x.url })) })
        )

    fetchDetails = id => fetcher.get(DETAILS_ENDPOINT + id,
        data => this.setState({ details: data })
    )

    componentDidMount = () => {
        this.fetchRoster();
    }

    selectCharacter = id => this.fetchDetails(id);

    render = () => (
        <div>
            <Rooster images={this.state.images} select={this.selectCharacter} />
            <Details {...this.state.details} />
        </div>
    )
}