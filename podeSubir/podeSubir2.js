/*
Programação Imperativa
Exercício “Pode Subir”
Objetivo
Vamos determinar em que momento usar uma estrutura condicional.
Microdesafios
Em um parque de diversões nos pedem um programa para verificar se os
passageiros da montanha-russa podem entrar no brinquedo.
1) Crie uma função podeSubir() que receba dois parâmetros:
- altura da pessoa;
- se está acompanhada.
Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode
subir ou não, baseado nas seguintes condições:
a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
b) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
c) Se a pessoa medir menos de 1.20m, não poderá subir, nem
acompanhada.
*/

function podeSubir(altura, acompanhada) {
  let result;
  if ( altura >= 1.40  && altura <= 2) {
    result = true;
  } else if (altura >= 1.21 && altura <= 1.39 && acompanhada === true ) {
    result = true;
  } else if (altura >= 1.21 && altura <= 1.39 && acompanhada !== true) {
    result = false
  } else if (altura <= 1.20 && acompanhada === true) {
    result = false
  }  else {
    result = false;
  }
  return result;
}

/*
else repetindo o ultimo else if com a condição acompanhada sendo falsa)
ex: else seria (altura <= 1.20 && acompanhada !== true)
*/

console.log(podeSubir(1.40)); // true
console.log(podeSubir(1.39, true)); // true
console.log(podeSubir(1.39, false)); // false
console.log(podeSubir(1.10, true)); // false
console.log(podeSubir(1.10, false)); // false

/*2) Modifique a função podeSubir(), de modo que ela exiba uma mensagem
de autorização ou de impedimento no acesso ao brinquedo dependendo
se a pessoa se enquadra ou não nas condições do exercício anterior. Por
exemplo:
a) Em caso de autorização, exiba a mensagem: “Acesso
autorizado” ou “Acesso autorizado somente com
acompanhante”;
b) Em caso de impedimento, exiba a mensagem: “Acesso
negado.
*/

function podeSubir2(altura, acompanhada) {
  let result;
  if ( altura >= 1.40  && altura <= 2) {
    result = 'Acesso autorizado';
  } else if (altura >= 1.21 && altura <= 1.39 && acompanhada === true ) {
    result = 'Acesso autorizado somente com acompanhante';
  } else if (altura >= 1.21 && altura <= 1.39 && acompanhada !== true) {
    result = 'Acesso negado';
  } else if (altura <= 1.20 && acompanhada === true) {
    result = 'Acesso negado';
  }  else {
    result = 'Acesso negado';
  }
  return result;
}

console.log(podeSubir2(1.40)); // Acessoautorizado
console.log(podeSubir2(1.39, true)); // Acesso autorizado somente com acompanhante
console.log(podeSubir2(1.39, false)); // Acesso negado
console.log(podeSubir2(1.10, true)); // Acesso negado
console.log(podeSubir2(1.10, false)); // Acesso negado