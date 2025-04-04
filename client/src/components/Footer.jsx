// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="text-center py-4" style={{ backgroundColor: '#0c0c0c', color: '#fff' }}>
      <div className="container">
        <div className="row">
          {/* Cột 1: Giới thiệu */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Về Paradise Food</h5>
            <p className="text-muted">
              Paradise Food mang đến những món ăn tuyệt vời từ nguyên liệu tươi ngon, kết hợp hài hòa giữa truyền thống và hiện đại.
            </p>
          </div>

          {/* Cột 2: Liên hệ */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Liên hệ</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:contact@paradisefood.com" className="text-muted text-decoration-none">
                  contact@paradisefood.com
                </a>
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:0123456789" className="text-muted text-decoration-none">
                  0123-456-789
                </a>
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                123 Đường Ẩm Thực, Q.1, TP.HCM
              </li>
            </ul>
          </div>

          {/* Cột 3: Mạng xã hội */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Theo dõi chúng tôi</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="mt-3 border-top pt-3">
          <p className="mb-0">© 2023 Paradise Food. All rights reserved.</p>
        </div>
      </div>

      {/* Nút giỏ hàng */}
      <Link
        to="/cart"
        className="btn btn-danger btn-lg rounded-circle position-fixed bottom-0 end-0 m-4"
        style={{ zIndex: 1000 }}
      >
        <i className="bi bi-cart"></i>
      </Link>
    </footer>
  );
};

export default Footer;