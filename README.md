# 🏁 Projeto: Contacts

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```bash
# caso use npm
npm run i

# caso use yarn
yarn
```

## Front

Para iniciar vá até o diretório contacts-front e utilize o comando abaixo para iniciar a aplicação:

```bash
# caso use npm
npm run dev

# caso use yarn
yarn dev
```

## Back

Para iniciar vá até o diretório contacts-back e utilize o comando abaixo para iniciar a api:

```bash
#caso use npm
npm run start

# caso use yarn
yarn start
```

Para persistir as migrações utilize o comando:

```bash
#caso use npm
npm run typeorm migration:run -- -d ./src/data-source.ts

#caso use yarn
yarn typeorm migration:run -- -d ./src/data-source.ts
```
