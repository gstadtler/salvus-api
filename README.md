# Salvus API

Projeto desenvolvido como teste técnico para a [Salvus](https://salvus.me/). 

## Descrição

Desenvolvimento de uma API RESTful, utilizando NodeJS com o framework Express.

## Ferramentas utilizadas no projeto

##### Dependencias principais

- O projeto foi desenvolvido utilizando [Node JS](https://nodejs.org/en/).
- Framework utilizado para gerenciar as rotas e o servidor do projeto foi o [Express JS](https://expressjs.com/pt-br/).
- Utilizei a lib [Knex JS](http://knexjs.org/) para montar os Schemas no banco de dados e gerenciar as queries.
- O banco de dados utilizado no projeto foi o [PostgreSQL](https://www.postgresql.org/download/).

##### Dependencias de desenvolvimento

- Utilizei a lib [Nodemon](https://nodemon.io/) que fica reponsável por observar as atualizações no código e recarregá-las automaticamente, e também para iniciar o servidor.

## Como rodar o projeto?

Clone este repositório para sua máquina, acesse o diretório onde o mesmso se encontra, instale as dependências.

#### Instalando as dependências

- `npm install nodemon -D`
- `npm install knex pg express`

> Após instalar as dependências, basta rodar o comando `npm start` e o servidor irá iniciar!

## Acessando as rotas do servidor

- O servidor deve estar rodando localmente no endereço **localhost:3333**
- Acessando `localhost:3333/api/patients` o servidor deve retornar um json com as informações das seeds contidas no banco de dados.

### As rotas foram testadas com a ferramenta Insomnia

- Neste repositório encontra-se uma pasta com alguns prints dos testes realizados no Insomnia 
- 
![Insomnia print](https://github.com/gstadtler/salvus-api/blob/master/insomnia%20tests%20prints/GET%20method%20(list%20patients).png)
