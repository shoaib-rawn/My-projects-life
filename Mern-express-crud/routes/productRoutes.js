const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  const result = await product.save();
  res.send(result);
});

// Read All
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// Read One
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});

// Update
router.put('/:id', async (req, res) => {
  const result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

// Delete
router.delete('/:id', async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});

module.exports = router;
