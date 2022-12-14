//como obter os numeros primos

function ePrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0 ) {
      return false;
    }
  }

  return true;
}

function todosNumerosPrimos(valor) {
  let dados = [2];

  for (let i = 3; i < valor; i+=2) {
    if (ePrimo(i)) {
      dados.push(i);
    }
  }

  console.log(dados);
}

todosNumerosPrimos(100);