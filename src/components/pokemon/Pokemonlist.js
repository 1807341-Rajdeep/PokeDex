import React, { Component } from 'react';
import axios from 'axios';
import Pokemoncard from './Pokemoncard';

export default class Pokemonlist extends Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon?limit=100',
        pokemon: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });
    }
    render() {
        return (
            <React.Fragment>
                {this.state.pokemon ? (<div className="row">
                    {this.state.pokemon.map(pokemon => (
                        <Pokemoncard
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    ))}
                </div>) : (<h1>
                    Loading Pokemon...
                </h1>)}

            </React.Fragment>

        );
    }
}
