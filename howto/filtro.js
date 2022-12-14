//chamar a funçãp pelo o que ela vai filtrar

const filtroSexo = (dados, tipo) => {
  if (!dados || !sexo) {
    return "Parâmetro dados ou sexo não foi enviado";
  }


  return dados.filter ((dado) => dado.sexo === tipo);
};



console.log(filtroSexo([], M));