const express = require('express');
const cors = require('cors');
require('./db');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);

app.listen(4000, () => {
  console.log('Backend server running on http://localhost:4000');
});
