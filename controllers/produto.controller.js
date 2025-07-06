// Importa o modelo Produto
const Produto = require("../models/produto.model");

// Buscar todos os produtos
const buscarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find({});
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
};

// Buscar um único produto pelo ID
const buscarProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findById(id);

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
};

// Criar um novo produto
const criarProduto = async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
};

// Atualizar um produto existente
const atualizarProduto = async (req, res) => {
  try {
    const { id } = req.params;

    const produtoAtualizado = await Produto.findByIdAndUpdate(id, req.body, {
      new: true, // retorna o produto atualizado
      runValidators: true, // aplica validações do schema
    });

    if (!produtoAtualizado) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.status(200).json(produtoAtualizado);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
};

// Deletar um produto pelo ID
const deletarProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByIdAndDelete(id);

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.status(200).json({ mensagem: "Produto removido com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
};

// Exporta todas as funções para serem usadas nas rotas
module.exports = {
  buscarProdutos,
  buscarProduto,
  criarProduto,
  atualizarProduto,
  deletarProduto,
};
