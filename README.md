# Biblioteca Node para validar links em arquivos

## O projeto
Projeto de uma biblioteca, feito durante curso sobre node.js da Alura, que percorre arquivos .md procurando por links para validação. A biblioteca verifica se os links são validos a partir de seu HTTP status code.   

## Funções
- [x] Recuperar links em arquivos
- [x] Recuperar links em arquivos de uma pasta
- [x] Tratamento de arquivo sem nenhum link
- [x] Tratamento de erros (verificar se pasta ou arquivo existe)
- [x] Verificar HTTP status code dos links encontrados no(s) arquivo(s)

### Inicializando o projeto
```
npm install
```

### Executando o projeto

- Executando todos os arquivos de uma pasta
```
npm run cli ./arquivos/ 
```

![Alt Text](https://github.com/DaniPoletto/projeto-node/blob/main/exemplo_programa1.jpg)

- Executando um arquivo
```
npm run cli ./arquivos/texto.md
```

![Alt Text](https://github.com/DaniPoletto/projeto-node/blob/main/exemplo_programa2.jpg)

- Validando os links do arquivo
```
npm run cli:valida
```

![Alt Text](https://github.com/DaniPoletto/projeto-node/blob/main/exemplo_programa3.jpg)

## Utilizando Node Package Manager, ou Gerenciador de Pacotes do Node (NPM)

### Criar arquivo package.json
```
npm init
```

### Instalar dependencias
```
npm install <nome do pacote>
```

## Comandos do Node
### Executando um arquivo no terminal
```
node index.js 
```

### Para utilizar a sintaxe de importação/modulo, acrescente a linha no arquivo package.json:
```
"type": "module",
```

### Exportando função
```
export default pegaArquivo;
```

### Importando função
```
import pegaArquivo from "./index.js";
```

### Transformando array em string - join()
```
arrLinks.map((objetoLink) => Object.values(objetoLink).join());
```

### Fetch

> A função fetch só funciona apartir da versão 18.0.0. Para versões anteriores é preciso intalar uma biblioteca externa.

Exemplo de uso:

```
const res = await fetch('https://api.belo.app/public/price');
if (res.ok) {
  const data = await res.json();
  console.log(data);
}
```

## Biblioteca Chalk
Biblioteca usada para formatar textos no terminal. 

> [Biblioteca Chalk](https://www.npmjs.com/package/chalk)

### Instalação
```
npm install chalk
```

### Instalando exatamente a versão 5.0.1
```
npm install chalk@5.0.1 --save-exact
```

### Exemplos de uso
Definindo a cor do texto como azul.
```
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
```

![Alt Text](https://github.com/DaniPoletto/projeto-node/blob/main/exemplo_chalk1.jpg)

## Biblioteca nativa FS (File System)
Biblioteca para trabalhar com arquivos.

## Tratamento de erros
Exemplo: (lançando um erro)
```
throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
```

[Mais sobre o objeto Error](https://nodejs.org/dist/latest-v16.x/docs/api/errors.html)

## Utilizando promises
Exemplo:
```
function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, enconding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro);
}
```
A função then espera receber um texto e caso ocorra algum erro, a função catch será executada chamando a função trataErro passando o parametro de erro automaticamente. 

## Async/Await
Exemplo:
```
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
        console.log(chalk.green(texto));
    } catch (erro) {
        trataErro(erro);
    }
}
```
async significa que a função será assincrona e await deve ser colocado na frente da função que deve esperar a resolução de uma promessa. 

## Expressões regulares
> https://regex101.com/

Exemplos:

Exatamento 'abc': 
```
abc
```

Todas as ocorrencias dos caracteres a, b e c: 
```
[abc]
```

Todas as ocorrencias que não sejam os caracteres a, b, ou c:
```
[^abc]
```

Espaços em branco:
```
[\s]
```

Qualquer caractere: (equivalente a [a-zA-Z0-9_])
```
[\w]
```

N vezes:
```
[\w]*?
```

> Para separar em grupos utilize ()

> gm significa global multilinha

### Retornando todas as ocorrências 
Exemplo 1: Retornando todas as ocorrências

```
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = texto.match(regex);
    console.log(capturas);
```

![Alt Text](https://github.com/DaniPoletto/projeto-node/blob/main/exemplo_regex1.jpg)

Exemplo 2: Retornando primeira ocorrência separando os grupos

```
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = texto.match(regex);
    console.log(capturas);
```

![Alt Text](https://github.com/DaniPoletto/projeto-node/blob/main/exemplo_regex2.jpg)

Exemplo 3: Retornando um array de ocorrências
```
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    console.log(capturas);
```

> ... (spread operator) expandem o array






