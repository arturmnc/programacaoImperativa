//Calculadora - Nível I

function adicionar(numA, numB){
  const resultado = numA + numB;
  return resultado;
};



function subtrair(numA, numB){
  const resultado = numA - numB;
  return resultado;
};



function multiplicar(numA, numB){
  const resultado = numA * numB;
  return resultado;
};



function dividir(numA, numB){
  const resultado = numA / numB;
  return resultado;
};



//Calculadora - Nível II
console.log ("Testes com as funções abaixo:"); 


console.log(adicionar(1,2));
console.log(subtrair(12,6));
console.log(multiplicar(3,3));
console.log(dividir(24,0));

//Calculadora - Nível III - Funções Extras
function quadradoDoNumero(numA){
  const resultado = numA * numA;
  return resultado;
};

console.log(quadradoDoNumero(8));

function mediaDeTresNumeros(numA, numB, numC){
  let somaTotal = adicionar(numA,numB) + numC;
  let total = dividir(somaTotal,3);
  return total;
};

console.log(mediaDeTresNumeros(20,30,50));



function calculaPorcentagem(numA,numB){
  let porcentagem = multiplicar(numA,numB);
  let resultado = dividir(porcentagem, 100);
  return resultado;
};

console.log(calculaPorcentagem(300,15));


function geradorDePorcentagem(numA,numB){
  let porcentagem = multiplicar(numA, 100);
  let resultado = dividir(porcentagem, numB)
  return resultado;
};

console.log(geradorDePorcentagem(4,400));