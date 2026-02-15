const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  codEditora: Number,
  titulo: String,
  resumo: String,
  autores: [String]
});

module.exports = banco.model('Livro', LivroSchema, 'livros');
