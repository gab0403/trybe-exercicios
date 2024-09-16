import React from "react";

class Fieldset1 extends React.Component { 
 render(){
     const {  value, handleChange } = this.props;

     return(
        <fieldset className="form1">
        <label> Nome:
          <input type="text" name= "nome" value={value}  onChange={handleChange}required></input>
          </label>
          <label> Email:
          <input type="email" name= "email" value={value} onChange={handleChange}required></input>
          </label>
          <label> CPF:
          <input type="text" name= "CPF" value={value} onChange={handleChange}required></input>
          </label>
          <label> Endereço:
          <input type="text" name= "endereco" value={value} onChange={handleChange} required></input>
          </label>
          <label> Cidade:
          <input type="text" name= "cidade" value={value} onChange={handleChange} required></input>
          </label>
          <label> Estado:
          <select required name="estado" value={value} onChange={handleChange}>
                 <option value="AC">Acre</option>
                 <option value="AL">Alagoas</option>
                 <option value="AP">Amapá</option>
                 <option value="AM">Amazonas</option>
                 <option value="BA">Bahia</option>
                 <option value="CE">Ceará</option>
                 <option value="DF">Distrito Federal</option>
                 <option value="ES">Espírito Santo</option>
                 <option value="GO">Goiás</option>
                 <option value="MA">Maranhão</option>
                 <option value="MT">Mato Grosso</option>
                 <option value="MS">Mato Grosso do Sul</option>
                 <option value="MG">Minas Gerais</option>
                 <option value="PA">Pará</option>
                 <option value="PB">Paraíba</option>
                 <option value="PR">Paraná</option>
                 <option value="PE">Pernambuco</option>
                 <option value="PI">Piauí</option>
                 <option value="RJ">Rio de Janeiro</option>
                 <option value="RN">Rio Grande do Norte</option>
                 <option value="RS">Rio Grande do Sul</option>
                 <option value="RO">Rondônia</option>
                 <option value="RR">Roraima</option>
                 <option value="SC">Santa Catarina</option>
                 <option value="SP">São Paulo</option>
                 <option value="SE">Sergipe</option>
                 <option value="TO">Tocantins</option>
               </select>
          </label>
          <label for="Apartamento"> Apartamento
          <input type="radio" name="tipo" value="Apartamento" onChange={handleChange}required></input>
          </label>
          <label for="Casa"> Casa
          <input type="radio" name="tipo"  value="Casa" onChange={handleChange} required></input>
          </label>
        </fieldset>
     )
 }
}

export default Fieldset1;
