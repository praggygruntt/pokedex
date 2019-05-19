import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            { id: 254, name: "Sceptile", type: "grass", base_experience: 208 },
            { id: 282, name: "Gardevoir", type: "psychic/Fairy", base_experience: 215 },
            { id: 334, name: "Altaria", type: "dragon/flying", base_experience: 210 },
            { id: 376, name: "Metagross", type: "pyschic/steel", base_experience: 206 },
            { id: 330, name: "Flygon", type: "dragon/ground", base_experience: 202 },
            { id: 426, name: "Drifblim", type: "ghost/flying", base_experience: 211 },
            { id: 350, name: "Milotic", type: "water", base_experience: 212 },
            { id: 491, name: "Darkrai", type: "dark", base_experience: 216 },
        ]
    }
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1> 
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((pokemon) => (
                        <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience} />))}
                </div>
            </div>
        )
    }  
}

export default Pokedex;