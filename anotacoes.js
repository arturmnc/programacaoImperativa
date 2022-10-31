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

