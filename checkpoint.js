
// O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.

var pipoca = 10, brigadeiro = 8, macarrão = 8, carne = 15, feijão = 12
function microondas( pipoca, brigadeiro, macarrão, carne, feijão){
if (pipoca && brigadeiro && macarrão && carne && feijão * 2){
  return 'A comida queimou.'
} else if (pipoca <= 9 ){
  return 'Tempo insuficiente.'
} else if (macarrão && brigadeiro <= 7 ){
  return 'Tempo insuficiente.'
} else if (carne <= 14 ){
  return 'Tempo insuficiente.'
} else if (feijão <= 11 ){
  return 'Tempo insuficiente.'
} else if (pipoca * 3 ){
  return 'Kabumm.'
} else if (macarrão && brigadeiro * 3 ){
  return 'Kabumm.'
} else if (carne * 3 ){
  return 'Kabumm.'
} else if (feijão * 3 ){
  return 'Kabumm.'
} else if (pipoca = 10){
   return 'Prato pronto, bom apetite!!!'
} else if (macarrão = 8){
  return 'Prato pronto, bom apetite!!!'
} else if (carne = 15){
  return 'Prato pronto, bom apetite!!!'
} else if (feijão = 12){
  return 'Prato pronto, bom apetite!!!'
} else if (brigadeiro = 8){
  return 'Prato pronto, bom apetite!!!'
} else {return 'Prato inexistente.'}
};


console.log(microondas(pipoca * 2));
console.log(microondas (pipoca <= 9));
console.log(microondas(pipoca * 3));
console.log(microondas(pipoca = 10));