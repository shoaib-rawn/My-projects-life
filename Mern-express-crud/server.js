const express = require('express');
require('./db');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());

app.use('/products', productRoutes);

app.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});
