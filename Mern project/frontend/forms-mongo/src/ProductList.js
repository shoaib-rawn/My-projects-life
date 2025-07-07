import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList({ refresh, setEditingProduct }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:4000/products');
    setProducts(res.data);
  };

 const handleDelete = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this product?");
  if (!confirm) return;

  await axios.delete(`http://localhost:4000/products/${id}`);
  fetchProducts();
};


  useEffect(() => {
    fetchProducts();
  }, [refresh]);

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Product List</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Price (Rs)</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod._id}>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>{prod.category}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => setEditingProduct(prod)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(prod._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
