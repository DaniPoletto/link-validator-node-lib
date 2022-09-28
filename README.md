# Projeto Node

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

