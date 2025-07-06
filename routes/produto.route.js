// Importa o Express para criar as rotas
const express = require('express');
const router = express.Router();

// Importa as funções do controller de produto
const {
  buscarProdutos,
  buscarProduto,
  criarProduto,
  atualizarProduto,
  deletarProduto,
} = require('../controllers/produto.controller');

// Rota para buscar todos os produtos
router.get('/', buscarProdutos);

// Rota para buscar um único produto pelo ID
router.get('/:id', buscarProduto);

// Rota para criar um novo produto
router.post('/', criarProduto);

// Rota para atualizar um produto existente
router.put('/:id', atualizarProduto);

// Rota para deletar um produto pelo ID
router.delete('/:id', deletarProduto);

// Exporta o router para ser usado no servidor principal
module.exports = router;
