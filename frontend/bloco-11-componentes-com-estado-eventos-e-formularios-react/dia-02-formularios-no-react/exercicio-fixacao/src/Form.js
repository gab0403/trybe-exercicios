import React from "react";
import './App.css';

class Form extends React.Component {
  render(){   
    const { value, handleChange } = this.props
    let error = undefined
    if(value.length > 50) error = "Texto muito grande!"

          return(
            <label> Nome:
            <input type="text" name="nome" value ={value} onChange= {handleChange}>
            </input>
          <span>
            {error ? error : ""}
          </span>
          </label>
          )
      }
}

export default Form;