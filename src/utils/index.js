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

const writeFile = async (req) => {
  console.log(req.body);
  const data = await readFile();
  const nextId = data[data.length - 1].id + 1;
  const newData = [...data, { id: nextId, ...req.body }];
  await fs.writeFile(dataTalker, JSON.stringify(newData, null, 2));
  return newData;
};

const getTalkerById = async (id) => {
  const data = await readFile();
  const talker = data.find((item) => item.id === Number(id));
  return talker;
};

const setTalkerById = async (id, req) => {
  const data = await readFile();
  const talker = data.find((item) => item.id === Number(id));
  const { name, age, talk } = req.body;
  talker.name = name;
  talker.age = age;
  talker.talk = talk;
  await fs.writeFile(dataTalker, JSON.stringify(data, null, 2));
  return talker;
};

const generateToken = () => crypto.randomBytes(8).toString('hex');

module.exports = {
  readFile,
  writeFile,
  getTalkerById,
  setTalkerById,
  generateToken,
};