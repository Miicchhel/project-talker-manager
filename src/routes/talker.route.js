const express = require('express');
const validateAge = require('../middlewares/validateAge');
const validateName = require('../middlewares/validateName');
const validateRate = require('../middlewares/validateRate');
const validateTalk = require('../middlewares/validateTalk');
const validateToken = require('../middlewares/validateToken');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const { getTalkerById, readFile, writeFile } = require('../utils');

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

router.post('/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const newData = await writeFile(req);
    res.status(201).json(newData[newData.length - 1]);
  });

module.exports = router;