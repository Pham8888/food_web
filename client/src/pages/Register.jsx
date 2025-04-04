import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.address || !formData.phone) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Email không hợp lệ!');
      return;
    }
    // Kiểm tra độ dài mật khẩu
    if (formData.password.length < 6) {
      alert('Mật khẩu phải từ 6 ký tự trở lên!');
      return;
    }
    // Kiểm tra số điện thoại (giả định 10 chữ số)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Số điện thoại phải là 10 chữ số!');
      return;
    }

    // Giả lập đăng ký (thay bằng API thực tế sau)
    console.log('Đăng ký:', formData);
    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    navigate('/login'); // Chuyển về trang đăng nhập
  };

  return (
    <div className="container my-5" style={{ paddingTop: '70px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Đăng ký</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Họ và tên</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên"
                />
              </div>
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
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Địa chỉ</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Nhập địa chỉ"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Số điện thoại</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại (10 số)"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Đăng ký</button>
            </form>
            <p className="text-center mt-3">
              Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;