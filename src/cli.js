import chalk from "chalk";
import fs from 'fs';
import pegaArquivo from "./index.js";

const caminho = process.argv;

function imprimeLista(resultado, nomeDeArquivo = '') {
    console.log(
        chalk.yellow('lista de links: \n'), 
        chalk.black.bgGreen(nomeDeArquivo+'\n'),
        resultado
    );
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log(chalk.red(erro.code, 'Diretório não existe')); 
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprimeLista(resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(lista, nomeDeArquivo);
        })
    }

}

processaTexto(caminho);