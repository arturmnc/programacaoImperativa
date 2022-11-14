/*
Trabalhando com Funções

 1. Crie uma função que converta polegadas em centímetros.
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros
*/

var x = 1
var y = 2.54
function polToCm(x, y) {
  return x * y
};

console.log(polToCm(1, y));
console.log(polToCm(2, y));
console.log(polToCm(3, y));


/*
2. Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
*/

var str = 'funcaojs'
var url = 'http://www.' + str + '.com.br'
function strToUrl(str, url) {
  return str + url
};

console.log(strToUrl(str, url));

/*
3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o
caracter de exclamação ( ! ).
*/
var str1 = 'this is a string' 
var strex = str1 + '!'
function strToStrex(str1, strex) {
  return str1 + strex
};

console.log(strToStrex(str1, strex));

/*
4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano
humano, equivale a 7 anos para eles.
*/
var dogAge = 1
var humanAge = 7
function dogHumanAge(dogAge, humanAge) {
  return dogAge * humanAge
};

console.log(dogHumanAge(1, humanAge));
console.log(dogHumanAge(2, humanAge));
console.log(dogHumanAge(3, humanAge));

/*
5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como
parâmetro o seu salário mensal
PS: considere que você trabalhe 160 horas no mês.
*/
var horaTrabMes = 160
var salarioMes = 5000
function valorHora(horaTrabMes, salarioMes) {
  return horaTrabMes / salarioMes
};

console.log(valorHora(horaTrabMes, salarioMes));

/* 
6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em
centímetros e o peso em quilogramas. Em seguida, execute a função, testando
diferentes valores.
*IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está
de acordo com a altura. 
IMC = Peso ÷ (Altura × Altura)
*/


var altura = 1.80
var peso = 120
function imc(altura, peso) {
  return peso / (altura * altura)
};

console.log(imc(altura, peso));

/*
7. Crie uma função que receba uma string em minúsculas, converta-a em
maiúsculas e as retorne.
Investigue o que o método de .toUpperCase() faz
*/


var string = 'hello world!'
function returnCaps(string) {
  let result = string.toUpperCase()
  return result
}

console.log(returnCaps(string));

/*
8. Crie uma função que receba um parâmetro e retorne o tipo de dado deste
parâmetro.
Dica: Isso te ajudará a entender o que o operador typeof faz.
*/

var type = 1 !== '1'
function returnType(type) {
  let result = typeof type
  return result
};

console.log(returnType(type));
console.log(returnType(string));
console.log(returnType(altura));

/*
Crie uma função pela qual passamos o raio de um círculo e ela retorna a
circunferência.
Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi
*/

function circDoRaio(raio) {
  return 2 * Math.PI * raio;
}

console.log(Math.PI);
console.log(circDoRaio(20));
console.log(circDoRaio(22.5));