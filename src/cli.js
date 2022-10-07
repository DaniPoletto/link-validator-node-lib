import chalk from "chalk";
import fs from 'fs';
import pegaArquivo from "./index.js";
import listaValidada from "./http-validacao.js";

const caminho = process.argv;

async function imprimeLista(valida, resultado, nomeDeArquivo = '') {

    if (valida) {
        console.log(
            chalk.yellow('lista validada: \n'), 
            chalk.black.bgGreen(nomeDeArquivo+'\n'),
            await listaValidada(resultado)
        );
    } else {
        console.log(
            chalk.yellow('lista de links: \n'), 
            chalk.black.bgGreen(nomeDeArquivo+'\n'),
            resultado
        );   
    }
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

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
        imprimeLista(valida, resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(valida, lista, nomeDeArquivo);
        })
    }

}

processaTexto(caminho);