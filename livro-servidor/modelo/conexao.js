const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/livraria')
  .then(() => console.log('✅ MongoDB conectado com sucesso'))
  .catch(err => console.error('❌ Erro ao conectar no MongoDB:', err));

module.exports = mongoose;
