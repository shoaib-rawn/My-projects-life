require('./db');
const Product = require('./Product');

const updateProduct = async () => {
  const result1 = await Product.updateOne(
    { name: 'Face Wash' },
    { $set: { price: 300 } }
  );

  const result2 = await Product.updateOne(
    { name: 'Sunscreen' },
    { $set: { price: 4000 } }
  );

  const result3 = await Product.updateOne(
    { name: 'Shampoo' },
    { $set: { price: 500 } }
  );

  console.log('Updated Face Wash:', result1);
  console.log('Updated Sunscreen:', result2);
  console.log('Updated Shampoo:', result3);
};

updateProduct();
