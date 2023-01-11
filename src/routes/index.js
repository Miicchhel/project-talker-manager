const express = require('express');

const router = express.Router();

const talker = require('./talker.route');
// const search = require('./search.route');
const login = require('./login.route');

// router.use('/talker/search', search);
router.use('/talker', talker);
router.use('/login', login);

module.exports = router;