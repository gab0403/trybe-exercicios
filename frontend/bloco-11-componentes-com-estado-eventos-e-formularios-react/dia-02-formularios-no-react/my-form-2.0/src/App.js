import React from 'react';
import './App.css';
import Fieldset1 from './Fieldset1';
import Fieldset2 from './Fieldset2';

class App extends React.Component {
  constructor(){
    super ();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: "",
      email: "",
      CPF: "",
      endereco: "", 
      cidade: "",
      estado: "",
      tipo: "",
      curriculo: "",
      cargo: "",
      descricaoCargo: ""
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }


  render(){
    return (
      <form>
       <h1> Cadastro de currículo </h1>
       <Fieldset1 value = {this.state.value} handleChange={this.handleChange}/>
       <Fieldset2 value = {this.state.value} handleChange={this.handleChange}/>
       <button>Salvar</button>
       <button>Limpar</button>

     </form>
    );

  }
}

export default App;
