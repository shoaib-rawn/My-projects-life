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

router.delete('/:id', async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (err) {
    res.status(404).send({ error: 'Product not found' });
  }
});

// ✅ UPDATE product by ID
router.put('/:id', async (req, res) => {
  try {
    const result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(result);
  } catch (err) {
    res.status(404).send({ error: 'Product not found' });
  }
});

module.exports = router;
 