const dadosAluno = {
  "data": [
    {
      "nome": "Rodrigo",
      "ativo": true,
      "modulosInscrito": [
        "Introdução a informática",
        "Programação imperativa",
        "Banco de dados",
        "Agile",
        "Backend"
      ],
      "valorParcela": 500,
    },
    {
      "nome": "Maria",
      "ativo": false,
      "modulosInscrito": [
        "Introdução a informática",
        "Programação imperativa",
        "Banco de dados"
      ],
      "valorParcela": 300,
    },
    {
      "nome": "João",
      "ativo": true,
      "modulosInscrito": [
        "Programação imperativa",
      ],
      "valorParcela": 150,
    },
  ]
}


const dadosAtual = dadosAluno.data.find((aluno) => aluno.nome === "Rodrigo");

document.getElementById("nomeAluno").innerHTML = dadosAtual.nome;
document.getElementById("situacaoAluno").innerHTML = dadosAtual.ativo ? "Ativo" : "Inativo";

let modulos = "";
dadosAtual.modulosInscrito.forEach((modulo) => {
  modulos += `<li>${modulo}</li>`;
});

document.getElementById("modulosAluno").innerHTML = modulos;
document.getElementById("parcelaAluno").innerHTML = dadosAtual.valorParcela.toFixed(2).replace(".", ",");