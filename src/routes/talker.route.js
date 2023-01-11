const express = require('express');
const validateAge = require('../middlewares/validateAge');
const validateName = require('../middlewares/validateName');
const validateRate = require('../middlewares/validateRate');
const validateTalk = require('../middlewares/validateTalk');
const validateToken = require('../middlewares/validateToken');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const {
  getTalkerById,
  readFile, 
  writeFile, 
  setTalkerById, 
  deleteTalkerById,
  filteredTalkers, 
} = require('../utils');

const router = express.Router();

router.get('/search', validateToken, async (req, res) => {
  const { q } = req.query;
  const filtered = await filteredTalkers(q);
  
  if (!q) {
    const data = await readFile();
    return res.status(200).json(data);
  }

  if (filtered.length === 0) return res.status(200).json([]);

  return res.status(200).json(filtered);
});

router.get('/', async (_req, res) => {
  const data = await readFile();
  if (!data) return res.status(200).json([]);
  res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getTalkerById(id);
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

router.put('/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const { id } = req.params;
    const newData = await setTalkerById(id, req);
    res.status(200).json(newData);
});

router.delete('/:id', validateToken, (req, res) => {
  const { id } = req.params;
  deleteTalkerById(id);
  res.sendStatus(204);
});

module.exports = router;