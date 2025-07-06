require('./db');
const Product = require('./Product');

const deleteProduct = async () => {
  const result = await Product.deleteOne({ name: 'Face Wash' });
  console.log('Deleted:', result);
};

deleteProduct();
