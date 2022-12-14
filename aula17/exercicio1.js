const dados = [
  {
    codigo: 1,
    produto: "arroz",
    valor: 100
  },
  {
    codigo: 2,
    produto: "soja",
    valor: 50
  },
  {
    codigo: 3,
    produto: "milho",
    valor: 80
  },
  {
    codigo: 4,
    produto: "ervilhas",
    valor: 30
  },
  {
    codigo: 5,
    produto: "trigo",
    valor: 20
  },
  {
    codigo: 6,
    produto: "feijão",
    valor: 15
  },
  {
    codigo: 1,
    produto: "arroz",
    valor: 100
  },
];

// 1 Calcular o lucro total de todos os produtos
const resultado1 = dados.reduce((valorTotal, valorAtual) => {
  return valorTotal + valorAtual.valor;
}, 0);

console.log('resultado1: ', resultado1);

// 2 Permitir pesquisar um produto pelo nome e calcular seu lucro total
let resultado2 = dados.filter((dado) => {
  return dado.produto.indexOf('arroz') > -1;
});

resultado2 = resultado2.reduce((valorTotal, valorAtual) => {
  return valorTotal + valorAtual.valor;
}, 0);

console.log('resultado2:', resultado2);

// 3 Permite receber um valor e indicar todos os produtos que venderam mais que esse valor

let resultado3 = dados.filter((dado) => {
  return dado.valor >= 50;
});

resultado3 = resultado3.reduce((valorTotal, valorAtual) => {
  return valorTotal + valorAtual.valor;
}, 0);

console.log('resultado3:', resultado3);

// 4 Classifique todos os produtos pela quantidade de dinheiro que geraram
let resultado4 = dados.sort((a, b) =>{
  return a.valor - b.valor; // Do menor valor para o maior
});

console.log('resultado4:', resultado4);

// 5 Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).

let resultado5 = dados.filter((dado) => {
  return dado.produto.indexOf('arroz') > -1;
});

resultado5 = resultado5.map((dado) => {
  return {
    codigo: dado.codigo,
    produto: dado.produto,
    valor: 120,
  };
});

console.log('resultado5:', resultado5);

// 6 Calcule o lucro total após pagar 45% do lucro em impostos
let resultado6 = dados.map((dado) => {
  return {
    codigo: dado.codigo,
    produto: dado.produto,
    valor: dado.valor - dado.valor * 0.45,
  };
});

console.log('resultado6:', resultado6);