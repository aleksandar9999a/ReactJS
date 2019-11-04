import React, { Component } from 'react';

export default class PokemonForm extends Component{
    render(){
        return (
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
        )
    }
}