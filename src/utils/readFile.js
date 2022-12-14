const fs = require('fs').promises;
const path = require('path');

const dataTalker = path.resolve(__dirname, '../talker.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(dataTalker);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erro na leitura do arquivo ${error.message}`);
  }
};

module.exports = readFile;