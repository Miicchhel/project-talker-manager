const express = require('express');
const { generateToken } = require('../utils');

const router = express.Router();

router.post('/', async (_req, res) => {
  const token = generateToken();
  console.log(token);
  res.status(200).json({ token });
});

module.exports = router;