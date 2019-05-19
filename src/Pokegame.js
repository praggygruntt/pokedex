import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 254, name: "Sceptile", type: "grass", base_experience: 208 },
            { id: 282, name: "Gardevoir", type: "psychic/Fairy", base_experience: 215 },
            { id: 334, name: "Altaria", type: "dragon/flying", base_experience: 210 },
            { id: 376, name: "Metagross", type: "pyschic/steel", base_experience: 206 },
            { id: 330, name: "Flygon", type: "dragon/ground", base_experience: 202 },
            { id: 426, name: "Drifblim", type: "ghost/flying", base_experience: 213 },
            { id: 350, name: "Milotic", type: "water", base_experience: 212 },
            { id: 491, name: "Darkrai", type: "dark", base_experience: 216 },
        ]
    };
    render() {
        let hand1 = [];
        let hand2 = [ ...this.props.pokemon ];
        while(hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random()*hand2.length);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);    
        };
        let exp1 = hand1.reduce((exp, pokemon) => exp+pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp+pokemon.base_experience, 0);
        return (
            <div>
                <hr></hr>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
                <hr></hr>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        )
    }
}

export default Pokegame;