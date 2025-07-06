require('./db');
const Product = require('./Product');

const createProduct = async () => {
  const products = [
    { name: 'Face Wash', price: 250, category: 'Skincare' },
    { name: 'Shampoo', price: 400, category: 'Hair Care' },
    { name: 'Lip Balm', price: 150, category: 'Cosmetics' },
    { name: 'Hand Crea', price: 300, category: 'Body Care' }
  ];

  const result = await Product.insertMany(products);
  console.log('Created products:', result);
};

createProduct();
