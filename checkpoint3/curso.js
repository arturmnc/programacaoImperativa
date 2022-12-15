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

const artur = new Aluno('Artur', 0, [9, 8, 10]);
const yago = new Aluno('Yago', 0, [1, 2, 3]);
const Rodrigo = new Aluno('Rodrigo', 0, [10, 10, 9]);

function Curso(nomeCurso, notaAprovacao, maxFaltas, listaEstudantes) {
  this.nomeCurso = nomeCurso;
  this.notaAprovacao = notaAprovacao;
  this.maxFaltas = maxFaltas;
  this.listaEstudantes = [artur, yago, Rodrigo];
  

  let randomInt = Math.floor(Math.random() * 10);
  this.addAluno = function addAluno() {
    const novoAluno = new Aluno('Aluno', randomInt, [randomInt, randomInt, randomInt]);
    listaEstudantes.push(novoAluno);
  }

  this.verificaAprovacao = function verificaAprovacao(aluno) {
    const media = aluno.calcularMedia()
    if(media >= this.notaAprovacao && aluno.faltas < this.maxFaltas) return true;
    if(media > this.notaAprovacao * 1.1 && aluno.faltas === maxFaltas) return true;
    return false;
  }

  this.verificaAprovAll = function verificaAprovAll(listaEstudantes) {
    const resultados = [];
    listaEstudantes.forEach((estudante) => {
      resultados.push(this.verificaAprovacao(estudante));
    });
    return resultados;
  }


}

const newCurso = new Curso('Programação Imperativa', 6, 3, [artur, yago, Rodrigo]);
console.log(newCurso);
newCurso.addAluno();
console.log(newCurso);

module.exports = Curso;


let isArturApproved = newCurso.verificaAprovacao(artur);
console.log(isArturApproved);

/*
Micro desafio - Passo 6
Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
array de booleanos com os resultados se os alunos aprovaram ou não.
*/

const resultados = newCurso.verificaAprovAll([artur, yago, Rodrigo]);
console.log(resultados);


module.exports = Curso;

