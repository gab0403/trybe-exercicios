import React from 'react';
import ListPokemon from './ListPokemon';
import "./App.css";

class App extends React.Component {
  render(){
    return (
      <main>
        <h2>PokeList</h2>
        <ListPokemon/>
      </main>
    );
  };
  }

export default App;
