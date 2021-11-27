const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json([
    {
      "id":1,
      "name":"cerulean",
      "color":"#98B2D1"
    },
    {
      "id":2,
      "name":"fuchsia rose",
      "color":"#C74375"
    },
    {
      "id":3,
      "name":"true red",
      "color":"#BF1932"
    }
  ]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json([
    {
      id,
      "name":"cerulean",
      "color":"#98B2D1"
    }
  ]);
});


module.exports = router;
