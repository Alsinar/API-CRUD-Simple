# 🛒 API Básica para Iniciantes: Gestão de Produtos

Uma API RESTful desenvolvida com Node.js, Express e MongoDB para gerenciar produtos. Permite criar, listar, atualizar e deletar produtos de forma simples e eficiente.

---

## 🚀 Funcionalidades

- ✅ Criar um novo produto  
- 📄 Listar todos os produtos  
- 🔍 Buscar um produto por ID  
- ✏️ Atualizar um produto existente  
- 🗑️ Deletar um produto  

---

## 🧱 Tecnologias Utilizadas

- Node.js  
- Express  
- MongoDB Atlas  
- Mongoose  
- dotenv  

---

## 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:  
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   ```env
   MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/nome-do-banco
   ```

4. Inicie o servidor:

   ```bash
   npm run serve
   ```

   O servidor será iniciado em: `http://localhost:3000`

---

## 📁 Estrutura do Projeto

```bash
.
├── controllers/
│   └── produto.controller.js
├── models/
│   └── produto.model.js
├── routes/
│   └── produto.route.js
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 📮 Endpoints da API

| Método | Rota                | Descrição                      |
|--------|---------------------|--------------------------------|
| GET    | `/api/produtos`     | Lista todos os produtos        |
| GET    | `/api/produtos/:id` | Busca um produto pelo ID       |
| POST   | `/api/produtos`     | Cria um novo produto           |
| PUT    | `/api/produtos/:id` | Atualiza um produto existente  |
| DELETE | `/api/produtos/:id` | Remove um produto do sistema   |

---

## 📌 Exemplo de Produto (JSON)

```json
{
  "nome": "Teclado Mecânico",
  "quantidade": 10,
  "preco": 299.99,
  "imagem": "https://exemplo.com/imagem.jpg"
}
```

---

## ✍️ Autor

Desenvolvido por **Alsinar** — Desenvolvedor web backend
