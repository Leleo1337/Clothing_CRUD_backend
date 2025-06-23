# 👕 Clothing_CRUD_backend

## 📚 Visão Geral

Esse projeto é o backend do clothing crud uma API RESTful desenvolvida em Node.js com TypeScript, utilizando o framework Express. Ela permite operações de CRUD (Criar, Ler, Atualizar e Deletar) sobre peças de vestuário e inclui autenticação via JSON Web Token (JWT) para proteger os recursos da aplicação.

A aplicação utiliza MongoDB com Mongoose como banco de dados.


---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express.js**
- **Mongoose**
- **MongoDB**
- **Vercel**

---

## 📁 Estrutura de Pastas

```
src/
├── controllers/ # Lógica dos endpoints
├── db/ # Conexão com o banco de dados (MongoDB)
├── errors/ # Tratamento centralizado de erros
├── interfaces/ # Tipagens TypeScript (interfaces de modelos)
├── middlewares/ # Middlewares (validação, autenticação JWT, erros)
├── models/ # Modelos Mongoose (Cloth, User)
├── routes/ # Rotas da API
├── utils/ # Funções utilitárias (bcrypt, formatPrice)
├── app.ts # Configuração da aplicação Express
└── server.ts # Inicialização do servidor junto com o banco de dados
```

## 📌 Endpoints da API

### Autenticação

- `POST api/v1/auth/register` – Cria um novo usuário
- `POST api/v1/auth/login` – Gera token JWT

### Roupas (requer token JWT)

- `GET api/v1/clothes` – Lista todos os itens
- `GET api/v1/clothes/:id` – Retorna item por ID
- `POST api/v1/clothes` – Cria novo item
- `PUT api/v1/clothes/:id` – Atualiza item existente
- `DELETE api/v1/clothes/:id` – Remove item

---

## 🔐 Autenticação

Utiliza **JWT** para proteger rotas:

1. O usuário se registra e/ou faz login
2. Um token JWT é retornado
3. Esse token deve ser enviado no `Authorization: Bearer <token>` em requisições protegidas


## 📥 Exemplo de Response

### 📌 Registro/Login

```json
{
  "success": true,
  "user": {
    "id": "1234567890",
    "name": "username"
  },
  "token": "jwt_token_aqui"
}
```

### 📄 Lista de roupas

```json
{
  "success": true,
  "data": {
    "_id": "1234567890",
    "name": "nome",
    "quantity": 123,
    "price": 123,
    "size": "P",
    "createdBy": "685087437f81c078284ee3b7",
    "createdAt": "2025-06-23T16:59:21.657Z",
    "updatedAt": "2025-06-23T17:54:02.781Z",
    "clothID": 123,
    "__v": 0,
    "formattedPrice": "R$123.00"
  }
}
```
 
