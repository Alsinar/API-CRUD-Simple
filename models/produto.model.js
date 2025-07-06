//chama a biblioteca mongoose para a conexaao a base de dados
const mongoose = require ('mongoose');

//Cria a tabela na base de dados
const ProdutoSchema = mongoose.Schema(
    {
        nome:{
            type: String,
            required:[true," Por favor insira o nome do produto"],
        },

        quantidade:{
            type: Number,
            require:true,
            default:0,
        },

        preco:{
            type: Number,
            require: true,
            default:0,
        },

        imagem:{
            type: String,
            require:false,
        },

    },
    {
        timestamps: true //Adiciona tempo na tabela quando eh que foi criado e atualizado
    }
);

const Produto = mongoose.model("Produto", ProdutoSchema); //Cria um modelo baseado em Shema do moongose

module.exports = Produto; //Exporta o modelo produto para que possa ser usado por outros arqivos no projecto