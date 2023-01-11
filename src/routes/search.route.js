// const express = require('express');
// const validateToken = require('../middlewares/validateToken');
// const { filteredTalkers, readFile } = require('../utils');

// const router = express.Router();

// router.get('/search', validateToken, async (req, res) => {
//   const { q } = req.query;
//   const filtered = await filteredTalkers(q);
  
//   if (!q) {
//     const data = await readFile();
//     return res.status(200).json(data);
//   }

//   if (filtered.length === 0) return res.status(200).json([]);

//   return res.status(200).json(filtered);
// });

// module.exports = router;