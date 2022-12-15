/*
Micro desafio - Passo 7
Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo
que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela
lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os
métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).
*/
const Aluno = require("./aluno");
const Curso = require("./curso");


const karen = new Aluno('Karen', 0, [9, 8, 10]);
const raissa = new Aluno('Raissa', 0, [1, 2, 3]);
const tatiane = new Aluno('Tatiane', 0, [10, 10, 9]);

const newCurso = new Curso('Programação Imperativa', 6, 3, [karen, raissa, tatiane]);

newCurso.addAluno();
console.log(newCurso.listaEstudantes);
console.log('Esse aqui: ', newCurso.verificaAprovAll([karen, raissa, tatiane]));
console.log('Esse aqui: ', newCurso.verificaAprovacao(karen));
