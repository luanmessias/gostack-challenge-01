# ![GoStack](https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png)

### Desafio 1: Conceitos do NodeJS

> “Sua única limitação é você mesmo”!

![GitHub language count](https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361) [ ![Made by Rocketseat](https://img.shields.io/badge/made%20by-Rocketseat-%2304D361) ](https://rocketseat.com.br) ![License](https://img.shields.io/badge/license-MIT-%2304D361) [![Stargazers](https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-01?style=social)](https://github.com/Rocketseat/bootcamp-gostack-desafio-01/stargazers)

[Sobre o desafio](#rocket-sobre-o-desafio) | [Entrega](#-entrega) | [Licença](#memo-licença)

## :rocket: Sobre o desafio

Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

### Middlewares

- Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Crie um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;

## 📅 Entrega

Esse desafio **não precisa ser entregue** e não receberá correção, mas você pode ver o resultado do [código do desafio aqui](https://github.com/Rocketseat/bootcamp-gostack-desafio-01/blob/master/index.js). Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
