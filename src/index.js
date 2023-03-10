const express = require('express');

const app = express();
app.use(express.json());

const routers = require('./routes');

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use(routers);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Simbora ficar de férias.');
});
