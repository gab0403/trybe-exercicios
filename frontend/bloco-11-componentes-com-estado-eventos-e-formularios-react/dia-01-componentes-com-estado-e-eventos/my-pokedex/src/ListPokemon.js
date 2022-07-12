import React from "react";
import pokemons from "./data";
import Pokedex from "./Pokedex";

class ListPokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filtroPokemon: "",
            filtroTipo: ""
        }
        this.handleFilter = this.handleFilter.bind(this); 
        this.buttonFire = this.buttonFire.bind(this);
        this.buttonAll = this.buttonAll.bind(this);
        this.buttonPsy = this.buttonPsy.bind(this);
    }

    handleFilter(event){
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state.filtroPokemon))
    }
    buttonFire(){
       this.setState ({
        filtroTipo: "Fire"
       })
    }
    buttonAll(){
        this.setState({
            filtroTipo: ""
        })
    }
    buttonPsy(){
        this.setState({
            filtroTipo: "Psychic"
        })
    }
    
    render() {
        
        return (
            <div>
                    <label> Buscar por Nome: </label>
                   <input type="text" name="filtroPokemon" onChange={this.handleFilter}></input>
                   <br/>
                   <p> Filtrar por tipo </p>
                   <button onClick = {this.buttonAll}> Todos </button>
                   <button onClick = {this.buttonFire}> Fire </button>
                   <button onClick = {this.buttonPsy}> Psychic </button>
                <section>
                    {pokemons
                    .filter((list) => list.type.includes(this.state.filtroTipo))
                    .filter((list) => list.name.includes(this.state.filtroPokemon))
                    .map((list) => (
                        <Pokedex key={list.id} pokedexInfo={list} />
                    ))}
                </section>
            </div>
        )
    }
}




export default ListPokemon;