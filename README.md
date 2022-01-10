# Manager - API

Fala, devs!

Criaremos uma API completa para utilizar em uma futura aplicação React de um gerenciador de estoques e vendas.

Esse projeto será para testar alguns conceitos e padronizações de desenvolvimento que estarão listados nesse readme. Sinta-se a vontade para contribuir ;)

---

## Tecnologias

- Node
- Typescript
- Express
- TypeORM
- Docker
- JEST

---

## Conceitos e Padronizações

- [StandardJS](https://standardjs.com/)
- [Semantic Versioning](https://semver.org/)
- [Gitmoji](https://gitmoji.carloscuesta.me/)
- [GitFlow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
- [SOLID](https://pt.wikipedia.org/wiki/SOLID)
- [Domain-Driven Design](https://medium.com/spotlight-on-javascript/domain-driven-design-for-javascript-developers-9fc3f681931a)
- [Test-driven development](https://pt.wikipedia.org/wiki/Test-driven_development)

---

## Started:
Suba os containers do docker:
```
docker-compose up -d
```
Execute o comando abaixo para subir as migrations:
```
npm run typeorm migration:run
```

Instale as dependências e inicie o servidor:
```
npm install && npm run dev
```

---

@author [Anderson Menezes](https://silk-biplane-d37.notion.site/Anderson-Menezes-5ec33939b60943c0ad2173940c61e0e6)  *( Seja melhor que ontem 👋 )*
