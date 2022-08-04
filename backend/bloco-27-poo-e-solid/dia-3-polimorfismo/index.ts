// import Person from './src/Person';
import Teacher from './src/Teacher';
import Student from './src/Student';
import Subject from './src/Subject';

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


const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
console.log(carolina);
console.log(lucas);

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
console.log(marta);
console.log(joao);