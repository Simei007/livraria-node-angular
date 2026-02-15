
const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  res.json(await obterLivros());
});

router.post('/', async (req, res) => {
  try {
    await incluir(req.body);
    res.json({ ok: true });
  } catch {
    res.json({ ok: false });
  }
});

router.delete('/:codigo', async (req, res) => {
  try {
    await excluir(req.params.codigo);
    res.json({ ok: true });
  } catch {
    res.json({ ok: false });
  }
});

module.exports = router;
