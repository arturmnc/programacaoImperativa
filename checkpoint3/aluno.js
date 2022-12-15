/*
Objetivos
Vamos realizar uma série de exercícios conectados entre si. O objetivo é trabalhar
um pouco com exercícios que dependem da etapa anterior para manter uma linha de
trabalho.
Importante: Ao final, lembre-se de enviar o código completo para o Github,
compartilhando o link do projeto com seus professores.
*/

/*
Micro desafio - Passo 1
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
(number) e notas (array de números). Crie um construtor para ele e importe-o como o
módulo aluno.

Micro desafio - Passo 2
Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas
*/

function Aluno(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;

  this.calcularMedia = function calcularMedia() {
    let soma = notas.reduce((a, b) => {
      return a + b;
    }); 
    let result = soma / notas.length;
    return result;
  }
  
  this.addFaltas = function addfaltas() {
    this.faltas++;
    return this.faltas;
  }
}

const artur = new Aluno('Artur', 0, [9, 8, 10]);
const yago = new Aluno('Yago', 0, [1, 2, 3]);

console.log(artur.calcularMedia());
console.log(yago.calcularMedia());
artur.addFaltas();
artur.addFaltas();
console.log(artur.faltas);
console.log(artur.addFaltas());



module.exports = Aluno;

