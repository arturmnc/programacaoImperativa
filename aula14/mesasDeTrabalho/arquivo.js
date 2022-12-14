/*
Em um arquivo.js, crie uma função (ou várias). Pode ser uma função que adicione dois parâmetros ou qualquer operação que você deseje.
*/

const somar = function (numA, numB){
  console.log(numA + numB);
};

/*
Modifique seu arquivo para que seja um módulo que exporte a função criada na etapa anterior. Lembre-se de usar a palavra reservada correta.
*/

module.exports = somar;

//Em outro arquivo JavaScript (arquivo2.js), dentro da mesma pasta de trabalho, solicite o módulo que você exportou.

/*
Verifique se sua função funciona corretamente.
Você pode imaginar em quais casos, ou programas, a criação de módulos poderia nos resolver e até mesmo nos salvar de grandes problemas?
Se você pensou em programas grandes com muitas linhas de código, acertou! Conforme nossos programas crescem e começam a escalar, o número de linhas de código também aumenta, e isso pode resultar em um problema de leitura e compreensão para todos que interagem com o seu código. Os módulos vêm para dividir nossos arquivos de forma que, embora tenhamos um número maior de arquivos, eles seriam menos pesados ​​entre si e conteriam menos linhas de código, tornando mais fácil de entender.
*/


