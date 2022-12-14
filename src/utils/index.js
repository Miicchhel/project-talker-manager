const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

const dataTalker = path.resolve(__dirname, '../talker.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(dataTalker);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erro na leitura do arquivo ${error.message}`);
  }
};

const getTalkerById = async (id) => {
  const data = await readFile();
  const talker = data.find((item) => item.id === Number(id));
  return talker;
};

const generateToken = () => crypto.randomBytes(8).toString('hex');

module.exports = {
  readFile,
  getTalkerById,
  generateToken,
};