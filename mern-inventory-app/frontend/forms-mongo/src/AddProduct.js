import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddProduct({ onProductAdded, editingProduct }) {
  const [form, setForm] = useState({ name: '', price: '', category: '' });

  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    } else {
      setForm({ name: '', price: '', category: '' });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingProduct) {
      await axios.put(`http://localhost:4000/products/${editingProduct._id}`, form);
    } else {
      await axios.post('http://localhost:4000/products', form);
    }
    onProductAdded();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price (Rs)</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={`btn ${editingProduct ? 'btn-success' : 'btn-primary'}`}>
          {editingProduct ? 'Save Changes' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
