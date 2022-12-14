const fs = require('fs');
const path = require('path');

let caminhoArquivo = path.join("prova.txt")


//fs.writeFileSync(caminhoArquivo, "Prova 2")

fs.appendFileSync(caminhoArquivo, "Prova final!")