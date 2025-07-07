import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); // ✅ holds the selected product to edit

  const handleProductAddedOrUpdated = () => {
    setRefresh(!refresh);
    setEditingProduct(null); // reset form
  };

  return (
    <>
      <AddProduct
        onProductAdded={handleProductAddedOrUpdated}
        editingProduct={editingProduct}
      />
      <ProductList
        refresh={refresh}
        setEditingProduct={setEditingProduct}
      />
    </>
  );
}

export default App;
