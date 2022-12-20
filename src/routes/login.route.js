const express = require('express');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const { generateToken } = require('../utils');

const router = express.Router();

router.post('/', validatePassword, validateEmail, async (_req, res) => {
  const token = generateToken();
  console.log(token);
  res.status(200).json({ token });
});

module.exports = router;