
const express = require('express');
const cors = require('cors');
const livrosRouter = require('./routes/livros');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/livros', livrosRouter);

module.exports = app;
