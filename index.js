const express = require('express');
const mongoose = require('mongoose');
const produtoRoute = require('./routes/produto.route');
require('dotenv').config();

const app = express();
app.use(express.json());

// Rota padrão
app.get('/', (req, res) => {
  res.send('API de Produtos em funcionamento');
});

// Usa as rotas de produto
app.use('/api/produtos', produtoRoute);

// Conecta ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexão bem-sucedida à base de dados');
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
})
.catch((err) => {
  console.error('Erro ao conectar ao banco de dados:', err);
});
