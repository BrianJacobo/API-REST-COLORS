const express = require('express');
const router = express.Router();
const ColorsService = require('../services/colors.service');
const service = new ColorsService();

// El uso de async await se usó para simular consultas a una base de datos

router.get('/', async (req, res) => {
  const colors = await service.find();
  res.status(200).json(colors);
});

router.post('/webhook', async (req, res) => {
  console.log('body', req.body);
  console.log('body.answers', req.body.answers);
  console.log('body.data', req.body.data);
  console.log('params', req.params);
  res.status(200).json({message:'ok'});
});

router.get('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const color = await service.findById(parseInt(id));
    res.status(200).json(color);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const newColor = await service.create( body )
    res.status(201).json(newColor);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const color = await service.update(parseInt(id), body);
    res.status(200).json(color);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const color = await service.delete(parseInt(id));
    res.status(200).json(color);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

module.exports = router;
