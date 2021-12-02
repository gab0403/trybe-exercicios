//Operador AND

const currentHour = 23;
let message = "";

if (currentHour >= 22) {
  console.log("Não deveriamos comer nada, é hora de dormir");
}
else if (currentHour >= 18 && currentHour < 22) {
 console.log("Rango da noite, vamos jantar :D");
}

else if (currentHour >= 14 && currentHour < 18) {
   console.log("Vamos fazer um bolo pro café da tarde?");
}
else if (currentHour >= 11 || currentHour <=14) {
console.log("Hora do almoço!!!");
}
else if (currentHour >=4 || currentHour <= 11) {
 console.log("Hmmmmm, cheiro de café recém passado");
}
console.log(message);

//Operador OR
 
let weekDay = "Quarta-feira";
if (weekDay === "Segunda-feira" || weekDay === "Terça-feira" ||weekDay === "Quarta-feira"|| weekDay === "Quinta-feira" || weekDay === "Sexta-feira") {
   console.log ("Oba! Mais um dia de aprendizado na Trybe!");
}
else if (weekDay === "Sábado" || weekDay === "Domingo"){
  console.log ("UHUL, descanso merecido!");
}
console.log(weekDay);

//Operador NOT
//Estamos diante de um operador muito poderoso. Ele pode inverter o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado true , podemos gerar o resultado oposto simplesmente fazendo !variável . Ou seja, false.