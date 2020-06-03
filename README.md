<h1 align="center">🚀 SpaceX Ships</h1>

###### Este projeto foi realizado para o processo seletivo da Tago.io

## Objetivo 🌎
Consumir a api GraphQL aberta da [SpaceX](https://api.spacex.land/graphql/) utilizando tecnologias backend. Buscar todas as naves ativas e sua missão atual, mostrar na tela o resultado em CSV.

## Descrição 📝
A aplicação foi feita em node, nela possui um handler que faz uma requisição a api com a seguinte query:
```graphql
{
  ships {
    name
    active
    missions {
      flight
      name
    }
  }
}
```
Após isso será feita a organização dos dados e a transformação em csv.

## Como usar ⚙️

```bash
$ npm install
$ npm start
```
A saida em CSV irá aparecer no terminal 


## Autor 👤

**Ricardo Stoklosa**

- Github: [@RicardoStoklosa](https://github.com/RicardoStoklosa)

- LinkedIn: [@ricardostoklosa](https://www.linkedin.com/in/ricardostoklosa/)
