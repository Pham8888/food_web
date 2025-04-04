// src/pages/Admin.jsx
import React, { useState, useEffect } from 'react';
import '../css/Admin.css';

const Admin = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '', category: '', image: null });
  const [editItem, setEditItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/menu');
      if (!response.ok) throw new Error('Không thể lấy danh sách món ăn');
      const data = await response.json();
      setMenuItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewItem({ ...newItem, image: e.target.files[0] });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditItem({ ...editItem, [name]: value });
  };

  const handleEditImageChange = (e) => {
    setEditItem({ ...editItem, image: e.target.files[0] });
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price || !newItem.category) {
      alert('Vui lòng điền đầy đủ thông tin món ăn!');
      return;
    }
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('name', newItem.name);
    formData.append('price', newItem.price);
    formData.append('category', newItem.category);
    if (newItem.image) formData.append('image', newItem.image);

    try {
      const response = await fetch('http://localhost:5000/api/menu', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Không thể thêm món ăn');
      const addedItem = await response.json();
      setMenuItems([...menuItems, addedItem]);
      setNewItem({ name: '', price: '', category: '', image: null });
      alert('Thêm món ăn thành công!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditItem = (item) => {
    setEditItem({ ...item, image: null }); // Giữ ảnh cũ nếu không upload mới
  };

  const handleUpdateItem = async (e) => {
    e.preventDefault();
    if (!editItem.name || !editItem.price || !editItem.category) {
      alert('Vui lòng điền đầy đủ thông tin món ăn!');
      return;
    }
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('name', editItem.name);
    formData.append('price', editItem.price);
    formData.append('category', editItem.category);
    if (editItem.image instanceof File) {
      formData.append('image', editItem.image);
    } else {
      formData.append('image', editItem.image); // Giữ ảnh cũ
    }

    try {
      const response = await fetch(`http://localhost:5000/api/menu/${editItem.id}`, {
        method: 'PUT',
        body: formData,
      });
      if (!response.ok) throw new Error('Không thể cập nhật món ăn');
      const updatedItem = await response.json();
      setMenuItems(menuItems.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
      setEditItem(null);
      alert('Cập nhật món ăn thành công!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (id) => {
    if (window.confirm('Bạn có chắc muốn xóa món ăn này?')) {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:5000/api/menu/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Không thể xóa món ăn');
        setMenuItems(menuItems.filter((item) => item.id !== id));
        alert('Xóa món ăn thành công!');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container my-5" style={{ paddingTop: '70px' }}>
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Trang Quản trị</h1>
        <p className="lead text-muted">Quản lý thực đơn của Paradise Food</p>
      </div>
      {error && <div className="alert alert-danger mb-4">{error}</div>}
      <div className="card shadow-sm p-4 mb-5">
        <h2 className="mb-4">Thêm món ăn mới</h2>
        <form onSubmit={handleAddItem}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label htmlFor="name" className="form-label">Tên món ăn</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newItem.name}
                onChange={handleChange}
                placeholder="Nhập tên món ăn"
                disabled={loading}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="price" className="form-label">Giá (VND)</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={newItem.price}
                onChange={handleChange}
                placeholder="Nhập giá"
                disabled={loading}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="category" className="form-label">Danh mục</label>
              <select
                className="form-select"
                id="category"
                name="category"
                value={newItem.category}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="">Chọn danh mục</option>
                <option value="Bữa sáng">Bữa sáng</option>
                <option value="Bữa chính">Bữa chính</option>
                <option value="Thức uống">Thức uống</option>
                <option value="Tráng miệng">Tráng miệng</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="image" className="form-label">Hình ảnh</label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={handleImageChange}
                disabled={loading}
                accept="image/*"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Đang thêm...' : 'Thêm món'}
          </button>
        </form>
      </div>
      <div className="mb-5">
        <h2 className="mb-4">Danh sách món ăn</h2>
        {loading ? (
          <p className="text-muted">Đang tải...</p>
        ) : menuItems.length === 0 ? (
          <p className="text-muted">Chưa có món ăn nào.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên món ăn</th>
                  <th>Giá (VND)</th>
                  <th>Danh mục</th>
                  <th>Hình ảnh</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price.toLocaleString()}</td>
                    <td>{item.category}</td>
                    <td>
                      {item.image && (
                        <img src={`http://localhost:5000${item.image}`} alt={item.name} width="50" />
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleEditItem(item)}
                        disabled={loading}
                      >
                        <i className="bi bi-pencil"></i> Sửa
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteItem(item.id)}
                        disabled={loading}
                      >
                        <i className="bi bi-trash"></i> Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal chỉnh sửa */}
      {editItem && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Chỉnh sửa món ăn</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditItem(null)}
                  disabled={loading}
                ></button>
              </div>
              <form onSubmit={handleUpdateItem}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="editName" className="form-label">Tên món ăn</label>
                    <input
                      type="text"
                      className="form-control"
                      id="editName"
                      name="name"
                      value={editItem.name}
                      onChange={handleEditChange}
                      disabled={loading}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editPrice" className="form-label">Giá (VND)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="editPrice"
                      name="price"
                      value={editItem.price}
                      onChange={handleEditChange}
                      disabled={loading}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editCategory" className="form-label">Danh mục</label>
                    <select
                      className="form-select"
                      id="editCategory"
                      name="category"
                      value={editItem.category}
                      onChange={handleEditChange}
                      disabled={loading}
                    >
                      <option value="">Chọn danh mục</option>
                      <option value="Bữa sáng">Bữa sáng</option>
                      <option value="Bữa chính">Bữa chính</option>
                      <option value="Thức uống">Thức uống</option>
                      <option value="Tráng miệng">Tráng miệng</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editImage" className="form-label">Hình ảnh</label>
                    <input
                      type="file"
                      className="form-control"
                      id="editImage"
                      name="image"
                      onChange={handleEditImageChange}
                      disabled={loading}
                      accept="image/*"
                    />
                    {editItem.image && !editItem.image instanceof File && (
                      <img
                        src={`http://localhost:5000${editItem.image}`}
                        alt="Current"
                        width="50"
                        className="mt-2"
                      />
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setEditItem(null)}
                    disabled={loading}
                  >
                    Hủy
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Đang cập nhật...' : 'Cập nhật'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;