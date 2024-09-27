import React from "react";
import PropType from 'prop-types';

class Pokedex extends React.Component {
    render(){
        const { pokedexInfo } = this.props;
        return(
            <article>
        <h2>Name: {pokedexInfo.name}</h2>
        <p>Tipo: {pokedexInfo.type}</p>
        <p>Peso: {pokedexInfo.averageWeight.value} {pokedexInfo.averageWeight.measurementUnit}</p>
        <img src={pokedexInfo.image} alt={pokedexInfo.name}></img>
      </article>
        )
    }
}

Pokedex.propTypes = {
    pokedexInfo: PropType.shape({
        name: PropType.string,
        image: PropType.string,
        type: PropType.string,
        averageWeight: PropType.shape({
            value: PropType.number,
            measurementUnit: PropType.string,
        }),
    }).isRequired
};

export default Pokedex;