require('./db');
const Product = require('./Product');

const getProducts = async () => {
  const products = await Product.find();
  console.log('All Products:', products);
};

getProducts();
