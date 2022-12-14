const express = require('express');
const readFile = require('./utils/readFile');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', async (_req, res) => {
  const data = await readFile();
  if (!data) return res.status(200).json([]);
  return res.status(200).json(data);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Simbora ficar de férias.');
});
