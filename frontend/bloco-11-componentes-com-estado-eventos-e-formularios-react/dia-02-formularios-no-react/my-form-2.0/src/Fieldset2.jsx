import React from "react";

class Fieldset2 extends React.Component { 
 render(){
    const {  value, handleChange } = this.props;
     return(
        <fieldset className= "form2"> Dados do seu último emprego
        <label>
         Resumo do curriculo:
        </label>
         <textarea name="curriculo" value={value}  onChange={handleChange} required></textarea>   
        <label>
         Seu cargo:
        </label>
         <textarea name="cargo" value={value}  onChange={handleChange} required></textarea> 
        <label>
         Descrição do cargo:
        </label>
         <input type= "text" name="descricaoCargo"  value={value}  onChange={handleChange}required></input> 
        </fieldset>
     )
 }
}

export default Fieldset2;
