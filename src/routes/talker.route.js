const express = require('express');
const { getTalkerById, readFile } = require('../utils');

const router = express.Router();

router.get('/', async (_req, res) => {
  const data = await readFile();
  if (!data) return res.status(200).json([]);
  res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getTalkerById(id);
  // console.log(data);
  if (!data) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(data);
});

module.exports = router;