const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json([
    {
      "id":1,
      "flavor":"dulce",
      "color":"#98B2D1"
    },
    {
      "id":2,
      "flavor":"saldo"
    },
    {
      "id":3,
      "flavor":"amargo"
    }
  ]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json([
    {
      id,
      "flavor":"dulce",
      "color":"#98B2D1"
    }
  ]);
});

module.exports = router;
