/*
Micro desafio - Passo 3
Em um arquivo diferente, crie o objeto literal curso 
que tem como atributos: nome do
curso (string), nota de aprovação (number), 
faltas máximas (number) e uma lista de
estudantes (um array composto pelos alunos 
  criados no passo 1).
-----------------------
Micro desafio - Passo 4
Crie o método que permite adicionar alunos à 
lista do curso, ou seja, quando
chamamos nosso método em nosso objeto curso, 
deverá adicionar um aluno a mais na
propriedade lista de estudantes do objeto curso.
*/

const Aluno = require("./aluno");

function Curso(nomeCurso, notaAprovacao, maxFaltas, listaEstudantes) {
  this.nomeCurso = nomeCurso;
  this.notaAprovacao = notaAprovacao;
  this.maxFaltas = maxFaltas;
  this.listaEstudantes = listaEstudantes;
  

  let randomInt = Math.floor(Math.random() * 10);
  this.addAluno = function addAluno() {
    const novoAluno = new Aluno('Aluno', randomInt, [randomInt, randomInt, randomInt]);
    listaEstudantes.push(novoAluno);
  }
}

const artur = new Aluno('Artur', 0, [9, 8, 10]);
const yago = new Aluno('Yago', 0, [1, 2, 3]);
const Rodrigo = new Aluno('Rodrigo', 0, [10, 10, 9]);
const newCurso = new Curso('Programação Imperativa', 6, 3, [artur, yago, Rodrigo]);
console.log(newCurso);
newCurso.addAluno();
console.log(newCurso);

