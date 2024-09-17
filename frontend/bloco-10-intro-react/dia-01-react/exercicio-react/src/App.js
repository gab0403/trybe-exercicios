import React from 'react';
import './App.css';

const Task = (oi) => {
      return (
      <div>
        <li key={oi}>{oi}</li>
      </div>
  );
}
const tarefas = ['ler', 'estudar', 'trabalhar'];

class App extends React.Component {
  render() {
    return (
     <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul> 
     
    );
}
  }


export default App;
