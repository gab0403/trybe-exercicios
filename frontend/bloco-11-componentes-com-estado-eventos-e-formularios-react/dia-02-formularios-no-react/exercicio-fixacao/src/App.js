import React from 'react';
import './App.css';
import Form from './Form';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: "",
      email: "",
      opcoes: "",
      textarea: "",
      checkbox: "false"
    };
  }

  handleChange({ target }) {
    // const { name, value } = target //Para quando não tiver checkbox.
     const { name } = target
     const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
     <form>
       <Form value={this.state.nome} handleChange={this.handleChange} />
       <label>E-mail:
         <input type="email" name="email" value ={this.state.email} onChange= {this.handleChange}>
         </input>
       </label>
       <label>Opções:
       <select name= "opcoes" value ={this.state.opcoes} onChange= {this.handleChange}>
         <option value="Ler">Ler</option>
         <option value="Escrever">Escrever</option>
       </select>
       </label>
       <label>Escreva:
       <textarea name="textarea" value ={this.state.textarea} onChange= {this.handleChange}></textarea>
       </label> Estou ciente e quero continuar :O
       <label>
         <input type="checkbox" value={this.state.checkbox} onChange= {this.handleChange} name="checkbox">
         </input>
       </label>
     </form>
    );

  }
}

export default App;
