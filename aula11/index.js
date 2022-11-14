/*
const valores = [2.5]

for (let indice = 20; indice >= 2; indice/= 2) {
  console.log('Olá mundo: ', indice);
};
*/




/*
arrow function
repetição de condição
sempre que trabalhar com conjunto de dados usar forEach
*/


/*
const valores = [10, 20, 30];

valores.forEach((valor) => {
  console.log(valor*2);
});
*/


//mostra somente os valores
/*
valores.forEach((valor) => {
  console.log(valor);
});
*/

//while sempre executa primeiro
//fica em loop ENQUANTO condição não é encontrada
/*
let i = 0;

while(i < 10) {
  console.log(i);
  i++;
};
*/


// FAÇA {codigo} ENQUANTO (parametro for atingido)
/*
let i = 0;

do {
  console.log(i);
  i++;
} while(i < 5);
*/

for (let indice = 10; indice >= -10; indice--) {
  console.log('Olá mundo: ', indice);
}

for (let indice = 20; indice >= 2; indice/= 2) {
  console.log('Olá mundo: ', indice);
}


const valores = [50, 10, 20, 30, 50];

valores.forEach(function(valor) {
  console.log(valor * 2);
});



valores.forEach((item) => {
  console.log(item === 50);
});

let i = 0;

while(i < 5) {
  console.log(i);
  i++;
}

for (let indice = 0; indice < 5; indice++) {
  console.log(indice);
}

let n = 0;

do {
  console.log(n);
  n++;
} while(n < 5);

prompt = require('prompt');
prompt.start();

const teste = async () => {
  let objeto = {};

  do {
    if (objeto['senha']) {
      console.log('Senha incorreta');
    }

    objeto = await prompt.get(['senha']);

  } while(objeto.senha !== '12345');

}

teste();