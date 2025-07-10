const express = require('express');
const router = express.Router();
const User = require('../model/User');

// ✅ SIGNUP Route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send({ success: false, message: 'User already exists' });
  }

  const newUser = new User({ email, password });
  await newUser.save();

  res.send({ success: true, message: 'Signup successful', user: newUser });
});

// ✅ LOGIN Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (user) {
    res.send({ success: true, message: 'Login successful', user });
  } else {
    res.status(401).send({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
