import React from "react";
import pokemons from "./data";
import Pokedex from "./Pokedex";

class ListPokemon extends React.Component {
    render() {
        return (
            <section>
                {pokemons.map((list) => (
                    <Pokedex key={list.id} pokedexInfo={list} />
                ))}
            </section>
        )
    }
}




export default ListPokemon;