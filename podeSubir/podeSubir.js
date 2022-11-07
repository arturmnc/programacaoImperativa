let acompanhada = false;
function podeSubir(altura, acompanhada){
if (altura >= 1.40 && altura <= 2){
  return 'Acesso autorizado';
} else if (altura < 1.40 && acompanhada == true) {
  return 'Acesso autorizado somente com acompanhante'
} else if (altura <= 1.20 && acompanhada == true || acompanhada == false){
  return 'Acesso negado'}
  else {return 'Acesso negado'}
};

console.log(podeSubir(1.20, 0));  // expected Acesso negado
console.log(podeSubir(1,20, 1));  // expected Acesso negado
console.log(podeSubir(2.1, 0));  // expected Acesso negado
console.log(podeSubir(1.40, 0));  // expected Acesso autorizado
console.log(podeSubir(1.39, 0)); // expected Acesso negado
console.log(podeSubir(1.39, 1)); // expected Acesso autorizado somente com acompanhante