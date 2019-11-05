import React, { Component } from 'react';

export default class PokemonForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getImages() {

    }

    render() {
        return (
            <div>
                <div>
                    <h1>Logged</h1>
                    Pokemon Name:
                <br />
                    <input type='text' name='pokemonName' />
                    <br />
                    Pokemon image:
                <br />
                    <input type='link' name='pokemonImg' />
                    <br />
                    Pokemon Info:
                <br />
                    <input type='text' name='pokemonInfo' />
                    <br />
                    <button type='submit' >Create Pokemon</button>
                </div>
                <div>

                </div>
            </div>
        )
    }
}