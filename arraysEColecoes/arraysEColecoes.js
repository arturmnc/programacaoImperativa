/* 
Arrays e Coleções
Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações.
Veremos se eles se comportam como esperamos ou se ocorrem resultados
inesperados.
Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:
A. Acessar elementos específicos de um array.
B. Modificar cada um dos elementos de um array e imprimi-los no console.
C. Adicionar elementos a um array.
D. Extrair elementos de um array.
E. Comparar elementos de um array com os elementos de outro.
1
O que esses códigos retornam?
Neste exercício, você terá que pensar sobre o que esses códigos retornam sem
testá-lo no console.
1. let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])
*/

/*
Resposta:
undefined, index de length não especificado
/*

/*
2. let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
"Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
*/

/*
Resposta:
Spiderman
*/

/*
3. let str = `una string qualquer`
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string",
"123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
*/

/*  
Resposta: una string qualquer
*/

/*
Array Invertido
Neste exercício, você terá que criar uma função que retorne um array com seus
elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o
modifique e inverta a ordem de seus elementos.
1. Crie a função imprimirInverso que pega um Array como um argumento e
imprime cada elemento em ordem reversa no console (você não precisa
inverter o Array).
*/

//const indice = [0, 1, 2, 3, 4];
//const reversed = indice.reverse();

//console.log(indice);



var indice = [0, 1, 2];
function imprimirInverso(indice, reversed) {
  let result;
  if (indice !== reversed) {
    result = indice.reverse();
  }
  return result;
}

console.log(imprimirInverso(indice)); //[ 2, 1, 0 ]

/*
2. Crie a função inverter que recebe um Array como argumento e retorna um novo
invertido.
*/

var array = ['array']
var newarray = ['novo', 'substituido', 'invertido']
function inverter(array) {
  let result;
  if (array !== newarray) {
    result = newarray.reverse();
  }
  return result;
}

console.log(inverter(array)); //[ 'invertido', 'substitui array', 'novo array' ]

/*
2
somarArray()
Neste exercício, você criará uma função somarArray() que aceita um array de números
e retorna a soma de todos eles.
Exemplo:
● somarArray([1,2,3]) // 6
● somarArray([10, 3, 10, 4]) // 27
● somarArray([-5,100]) // 95
*/

var Array1 = [1, 2,3];
var Array2 = [10, 3, 10, 4];
var Array3 = [-5, 100];

function somarArray(arr) {
  if(!Array.isArray(arr)) return;
  return arr.reduce((a, v)=>a + v);
}

console.log(somarArray(Array1)); // 6
console.log(somarArray(Array2)); // 27
console.log(somarArray(Array3)); // 95
 
/*
Simulação Array.join()
Neste exercício, você criará uma função chamada join que recebe um array e simula o
comportamento do método Array.join().
Importante: Não poderá utilizar o método Array.join() original.
Por exemplo:
join(["o","l","á"]) deve retornar a string "olá".
join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".
*/

function join(arr, sep = '') {
  let output = '';
  arr.forEach(el => {
    if (output == '') {
      output += el;
    } else {
      output += sep? sep + el: '' + el;
    }
  });
  return output;
}
console.log(join(["o","l","á"])); // olá
console.log(join(["t","c","h","a","u"])); // tchau

/*

Coleções de Filmes (e mais…)
O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para
isso, devemos:
1. Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
"star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela".
3
Importante: verifique se tudo funciona corretamente acessando qualquer um
dos filmes uma vez que a estrutura correspondente tenha sido criada.
*/

const filmesESeries = [`star wars`, `matrix`, `mr.robot`, `o preço do amanhã`, `a vida é bela`]


/*
2. Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função
que recebe um array por parâmetro e converta o conteúdo de cada elemento
em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase().
*/

/*
function countItems(arr) {
  newarray = [];
  for (let i = 0; i < arr.length; i++) {
    
    newarray.push(arr[i].toUpperCase());
  }
  return newarray;
};

console.log(countItems(filmesESeries));
*/

//com arrow function
const countItems2 = arr => arr.map(item => item.toUpperCase());

console.log(countItems2(filmesESeries));

/*
3. Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de
animação:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para
poder adicionar os elementos contidos no segundo array, dentro do primeiro, a
fim de retornar um único array com todos os filmes como seus elementos.
*/

const filmesEJogos = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite']

function concatArr(array1d, element) {
  return array1d.concat(element);
}

console.log(concatArr(filmesESeries, filmesEJogos));

/*
4. Durante o processo, percebemos que o último elemento na série de filmes
animados é, na verdade, um game. Agora devemos editar nosso código e
modificá-lo para que possamos remover o último elemento antes de migrar o
conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável.
*/

console.log(filmesEJogos.pop());
console.log(filmesEJogos);

/*
5. Finalmente, recebemos dois arrays com classificações feitas por diferentes
usuários do mundo nos filmes com o seguinte formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
4
Crie uma função que compare as notas e nos diga se elas são iguais ou
diferentes.
Para verificar se tudo está bem até agora, recomendamos testar cada uma das
funções, a fim de verificar seu correto funcionamento.
Se chegarmos a este ponto e tudo estiver bem, o tech leader da equipe deve estar
extremamente feliz com nosso trabalho e desempenho.
Bom trabalho!
*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function arraysEqual(a1,a2) {
  return JSON.stringify(a1)==JSON.stringify(a2);
}
console.log(arraysEqual(asiaScores,euroScores)); // asiaScores !== euroScores
console.log(arraysEqual(asiaScores,asiaScores));
console.log(arraysEqual(euroScores,euroScores));

