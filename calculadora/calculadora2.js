/*
Vamos fazer uma Calculadora
Com os conhecimentos que adquirimos até agora, podemos desenvolver a nossa
primeira aplicação, uma calculadora! Essa aplicação consiste em diferentes níveis de
dificuldade, e estaremos juntos para você poder conclui-la!
Calculadora - Nível I
1. Crie um arquivo calculadora.js que terá as diferentes operações para realizar.
*/
/*
2. Crie uma função adicionar, que deverá receber dois parâmetros e retornar a
soma deles.
*/

let adicionar = function (numA, numB){
  console.log(numA + numB);
};

/*
3. Crie uma função de subtração, que deverá receber dois parâmetros e retornar
a subtração do primeiro menos o segundo.
*/

let subtracao = function (x, y) {
  console.log(x - y);
};

/*
4. Crie uma função de multiplicação, que deverá receber dois parâmetros e
retornar o resultado de sua multiplicação.
*/

let multiplicacao = function (x, y) {
  console.log(x * y);
};

/*
5. Crie uma função de divisão, que receberá dois parâmetros e retornará o
resultado da divisão do primeiro sobre o segundo.
*/

let divisao = function (x, y) {
  console.log(x / y);
};

/*
1
Calculadora - Nível II
Após passar o Nível I, adicionamos um pouco mais de dificuldade para testarmos
nossas funções.
1. No seu arquivo calculadora.js, a partir das 4 funções feitas anteriormente, crie
um console.log no qual você irá colocar uma string para indicar que abaixo dela
você começará a testar as funções, por exemplo:
console.log ("-------------- Teste de Operações / Calculadora --------------")
*/

console.log("-------------- Teste de Operações / Calculadora --------------");

/*
2. Execute a função que soma e a função que subtrai, passando quaisquer dois
números como argumentos. Mostrar result
ados no console.
*/
adicionar(1,2);
subtracao(5,3);

/*
3. Execute a função que multiplica, passando quaisquer dois números como
argumentos. Mostre o resultado no console.
*/

multiplicacao(2,2);

/*
4. Execute a função que faz divisão, passando quaisquer dois números como
argumentos. Mostre o resultado no console.
*/

divisao(12,2);

/*
5. Execute a função que faz divisão, passando agora o número zero como um dos
dois argumentos. Mostre o resultado no console.
Agora no ponto 5, vimos que éramos obrigados a executar a função de divisão, mas
forçá-la causaria um erro. Não se preocupe! A ideia é se familiarizar com isso ao longo
de sua carreira de programador e durante o processo de treinamento você vai
encontrar erros, então propomos aprender a lidar com essa frustração da maneira
mais produtiva possível. Continue com determinação e siga em frente!
Calculadora - Nível III - Funções Extras
Se chegamos até aqui, podemos ficar tranquilos em relação ao que fizemos.
2
A partir deste momento, desenvolveremos funções extras para nossa Calculadora, a
partir das funções que já criamos e efetuaremos testes após desenvolver cada uma
função.
*/

divisao(2,0);

/*
1. Crie uma função chamada quadradoDoNumero, que recebe um número como
parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja,
ao quadrado.
Importante: quadradoDoNumero() deve usar a função multiplicação() para
calcular o quadrado do parâmetro inserido em power().
*/

let quadradoDoNumero = function (x) {
  console.log(x * x);
}

quadradoDoNumero(4);
/*
2. Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números,
que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções
criadas anteriormente em nossa calculadora.
*/

let mediaDeTresNumeros = function (x, y, z) {
  console.log((x + y + z) / 3);
}

mediaDeTresNumeros(9, 10, 12);

/*
3. Crie a função calculaPorcentagem, que receberá dois parâmetros: o número
total e a porcentagem que deseja calcular, e que deverá retornar x% de
totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15) (deve retornar 45, pois é 15% de 300).
Importante: calculaPorcentagem() você precisará usar algumas funções
criadas anteriormente em nossa calculadora. 
*/

let calculaPorcentagem = function (x, y) {
  console.log(((x * y) / 100));
}

calculaPorcentagem(300, 15);

/*
4. Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá
retornar a porcentagem do primeiro em relação ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
Parabéns, conseguimos aplicar e entender conceitos que vão nos servir ao longo de
nossa carreira, agora temos que pensar em melhorias para nossa Calculadora com o
conhecimento que iremos adquirir no futuro.
*/

let geradorDePorcentagem = function (x, y) {
  console.log((x * 100) / y);
}

geradorDePorcentagem(2, 200);
