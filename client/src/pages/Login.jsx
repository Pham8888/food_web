// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../css/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    // Giả lập đăng nhập (thay bằng API thực tế sau)
    const mockUser = {
      email: formData.email,
      name: 'Người dùng', // Thay bằng dữ liệu thực từ API
      role: formData.email === 'admin@paradisefood.com' ? 'admin' : 'user', // Giả lập vai trò
    };
    login(mockUser);
    alert('Đăng nhập thành công!');
    navigate('/'); // Chuyển về trang chủ
  };

  return (
    <div className="container my-5" style={{ paddingTop: '70px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Đăng nhập</button>
            </form>
            <p className="text-center mt-3">
              Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;