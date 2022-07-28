const { mainModule } = require('process');

const fs = require('fs').promises;

const simpsons = 'simpsons.json';

//Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
function simpsonsFamily(){
    fs.readFile(simpsons, 'utf8')
      .then((data) => {
          const simpsons = JSON.parse(data);
          const infos = simpsons.map(({id,name}) => `${id } - ${name}`);
          infos.forEach((info) => console.log(`Conteúdo do arquivo: ${info}`));
      })
      .catch((err) => {
        console.error(`Não foi possível ler o arquivo ${simpsons}\n Erro: ${err}`);
      });
}

simpsonsFamily();

// função com async await
async function simpsonsFamilyComAsyncAwait() {
    const simpsonsDoc = 'simpsons.json';
    const data = await fs.readFile(simpsonsDoc, 'utf-8');
    const simpsons = JSON.parse(data);
    const infos = simpsons.map(({ id, name }) => `${id} - ${name}`);
  
    infos.forEach((info) => console.log(info));
  }

  simpsonsFamilyComAsyncAwait();

  //Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
  async function getSimpsonById(id) {
    const data = await fs
      .readFile('./simpsons.json', 'utf-8');
    
    const simpsons = JSON.parse(data);
    const getSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
    if (!getSimpson) {
        throw new Error('id não encontrado');
     }
     return getSimpson;
  }

async function main1() {
  const func = await getSimpsonById(5);
  console.log(func)
}
main1();

//Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function removeCharacter() {
    const data = await fs
      .readFile('./simpsons.json', 'utf-8');
    
    const simpsons = JSON.parse(data);
    const filterCharacter = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile('./simpsons.json', JSON.stringify(filterCharacter));
}

async function main2() {
   await removeCharacter();
}
main2(); //modifica o arquivo e não aparece a modificação no terminal.

async function copyCharacter() {
    const data = await fs
      .readFile('./simpsons.json', 'utf-8');
    
    const simpsons = JSON.parse(data);
    const filterCharacter = simpsons.filter((simpson) => simpson.id <= '4');
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(filterCharacter));
}

async function main3() {
  await copyCharacter();
}
main3();

//Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz
async function addCharacter() {
    const data = await fs
      .readFile('./simpsonsFamily.json', 'utf-8');
    
    const simpsons = JSON.parse(data);
    simpsons.push({ id:'5', name:'Nelson Muntz' });
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
}
 async function main4() {
    await addCharacter();
  }
 main4();

 //Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
 async function replaceNelson(){
    const data = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
    const simpsons = JSON.parse(data);
    simpsons.splice(4, 1, { id:'5', name:'Maggie Simpson'});
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
 }

 async function main5() {
    await replaceNelson();
}
 main5();