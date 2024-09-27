"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Person from './src/Person';
var Teacher_1 = require("./src/Teacher");
var Student_1 = require("./src/Student");
var Subject_1 = require("./src/Subject");
// // tentar fazer isso agora deve gerar um erro
// // já que nossa classe se tornou abstrata e não podemos criar instâncias de classes abstratas
// const pessoa = new Person('Carolina da Silva', new Date('2005/03/17'));
// // isso não deve gerar nenhum erro
// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
// console.log(carolina);
// const math = new Subject('Matemática');
// // isso também não deve gerar nenhum erro
// const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
// console.log(marta);
var carolina = new Student_1.default('Carolina da Silva', new Date('2005/03/17'));
var lucas = new Student_1.default('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
console.log(carolina);
console.log(lucas);
var math = new Subject_1.default('Matemática');
var history = new Subject_1.default('História');
var marta = new Teacher_1.default('Marta da Silva', new Date('1980/03/30'), 2000, math);
var joao = new Teacher_1.default('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
console.log(marta);
console.log(joao);
