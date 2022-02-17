// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK .addEventListener("click", function(event){
    event.preventDefault() // Ao clicar na caixinha, nada deve acontecer.
  });
 INPUT_CHECKBOX.addEventListener("click", function(event){
    event.preventDefault() //Não clica no quadradinho
  });
  INPUT_TEXT.addEventListener ('keypress', function (event) {
    const keyA = event.key;
    if(keyA !== 'a'){
        event.preventDefault();
    }
    //Utilizando o event.key , é possível capturar qual tecla foi pressionada e então submeter o caractere correspondente a uma condição.
  });