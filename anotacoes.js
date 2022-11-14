//função declarada
// functioin + nome + parenteses de parâmetro() + bloco de código{}
function darOi() {
  console.log("Olá, tudo bem?");
}

darOi();

//função expressa
//usa-se uma variável (var, let ou const) e o nome da variavel vai ser a função
let somar = function (numA, numB){
  console.log(numA + numB);
};

somar(1, 2);

// Declarative Function
function adicao(valor1, valor2 = 20) {
  const resultado = valor1 + valor2;
  return resultado;
}

function subtracao(valor1, valor2 = 20) {
  const resultado = valor1 - valor2;
  return resultado;
}

function multiplicacao(valor1, valor2 = 20) {
  const resultado = valor1 * valor2;
  return resultado;
}

function divisao(valor1, valor2 = 20) {
  const resultado = valor1 / valor2;
  return resultado;
}

let total = adicao(10, 20);
let totalSub = subtracao(5, 25);

console.log('total soma:', total);
console.log('total sub:', totalSub);
console.log('outro total', adicao(total, totalSub));

multiplicacao(5, 5);
divisao(10, 2);
// Express Function
const soma1 = function(valor1, valor2) {
  return valor1 + valor2;
}

// Arrow Function
const soma2 = (valor1, valor2) => {
  return valor1 + valor2;
}

// Arrow Function
const soma3 = (valor1, valor2) => valor1 + valor2;





  const date = new Date ()



function retornaSaudacao(nome, hoje) {
  return `Olá, ${nome}, ${hoje}`;
}

console.log(retornaSaudacao('Rodrigo', retornaHoje()));







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



const numeros = [10, 20, 19, 18, 15, 20, 21, 50];
const textos = ['dez', 'vinte', 'trinta'];

console.log('Dados originais: ', numeros);
numeros.push(40);
console.log('Dados adicionado 40', numeros);
numeros.pop();
console.log('Dados removido 40', numeros);
numeros.shift();
console.log('Dados removido 10', numeros);

numeros.splice(1, 1, 50);
console.log(numeros);

console.log('original numeros: ', numeros);
console.log('original textos: ', textos);

numeros.splice(2, 1, textos[2]);
console.log(numeros);


const resultado1 = numeros.find(function(item) {
  return item > 20;
});

const resultado2 = numeros.filter((item) => item > 10);
const resultado3 = numeros.findIndex((item) => item > 10);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);


const indice20 = numeros.findIndex((item) => item === 20);

numeros.splice(indice20, 1, textos[1]);
console.log(numeros);




/*
iteração
*/


const numeros = [10, 20, 19, 10, 15, 20, 21, 30, 100, 30, 20];
const textos = ['dez', 'vinte', 'trinta'];

// numeros.forEach((item) => console.log(item));

let busca = 0;

console.log(numeros);

numeros.forEach((item) => {
  let index;

  if (
    item === 10 ||
    item === 20 ||
    item === 30
    ) {
      index = numeros.indexOf(item, busca);
      let texto;

      switch(item) {
        case 10:
          texto = textos[0];
        break;
        case 20:
          texto = textos[1];
        break;
        case 30:
          texto = textos[2];
        break;
      }

      numeros.splice(index, 1, texto);
      busca++;

  }
});

console.log(numeros);
incremento-decremento.js
let valor = 10;

console.log(valor); // 10

valor--; // - 1

console.log(valor); // 9

valor--; // - 1

console.log(valor); // 8