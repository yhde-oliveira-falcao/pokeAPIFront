import { useState } from "react";
import React, { Component }  from 'react';
import Axios from "axios";


const Content = () => {

    const [pokemonName, setPokemonName] = useState("");

    const [pokemonChosen, setPokemonChosen] = useState(false);

    const [pokemon, setPokemon] = useState({
        name: "", 
        species: "", 
        img: "", 
        hp: "",
        attack: "",
        defense: "",
        type: "",
    });

    const getPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
            (response) => {
            console.log(response)//debugging 
            setPokemon({
                name: pokemonName, 
                species: response.data.species.name, 
                img: response.data.sprites.front_default, 
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                type: response.data.types[0].type.name
            });
            setPokemonChosen(true);
        });
    };
    
    return (
        <main>
            <p>Hello</p>
            <input type="text" onChange={(event) => {
                setPokemonName(event.target.value);
                }}
            />
            <br></br>
            <button onClick = {getPokemon}>Search</button>

            <div className="displaySection">{
                !pokemonChosen ? (
                    <h1>Select Pokemon</h1>
                ) : (
                    <>
                    <h1>{pokemonName}</h1>
                    <img src={pokemon.img} />
                    <h3>Species: {pokemon.species}</h3>
                    <h3>Type: {pokemon.type}</h3>
                    <h3>HP: {pokemon.hp}</h3>
                    <h3>Attack: {pokemon.attack}</h3>
                    <h3>Defense: {pokemon.defense}</h3>

                    </>
                    )}
                
            </div>

        </main>
    )
}


export default Content