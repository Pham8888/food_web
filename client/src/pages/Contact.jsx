import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    console.log('Dữ liệu gửi đi:', formData);
    alert('Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại sớm.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      className="contact-page"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,rgba(23, 23, 24, 0.4) 0%, #2c3e50 100%)',
        paddingTop: '100px',
      }}
    >
      <div className="container py-5">
        {/* Header Section */}
        <div
          className="header-section text-center mb-5 py-5"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h1
            className="fw-bold mb-3"
            style={{
              color: '#1e2a44',
              fontSize: '3.2rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Liên Hệ Với Paradise Food
          </h1>
          <p
            className="lead fs-5 mx-auto"
            style={{ maxWidth: '800px', color: '#7f8c8d' }}
          >
            Chúng tôi rất mong được hợp tác và mang đến những giá trị tuyệt vời cùng bạn!
          </p>
        </div>

        {/* Contact Info & Form Section */}
        <div className="row g-5 mb-5">
          {/* Contact Info - Bên trái */}
          <div className="col-md-4">
            <div
              className="contact-info p-4 h-100"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f5f6fa 100%)',
                borderRadius: '15px',
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2
                className="fw-bold mb-4"
                style={{ color: '#ff6b47', fontSize: '2rem' }}
              >
                Thông Tin Liên Hệ
              </h2>
              <ul className="list-unstyled">
                <li className="mb-4 d-flex align-items-center">
                  <i
                    className="bi bi-geo-alt text-primary me-3"
                    style={{ fontSize: '1.6rem' }}
                  ></i>
                  <span style={{ fontSize: '1.15rem', color: '#1e2a44' }}>
                    123 Đường Ẩm Thực, TP.HCM, Việt Nam
                  </span>
                </li>
                <li className="mb-4 d-flex align-items-center">
                  <i
                    className="bi bi-envelope text-primary me-3"
                    style={{ fontSize: '1.6rem' }}
                  ></i>
                  <a
                    href="mailto:contact@paradisefood.com"
                    style={{ fontSize: '1.15rem', color: '#1e2a44', textDecoration: 'none' }}
                  >
                    contact@paradisefood.com
                  </a>
                </li>
                <li className="mb-4 d-flex align-items-center">
                  <i
                    className="bi bi-telephone text-primary me-3"
                    style={{ fontSize: '1.6rem' }}
                  ></i>
                  <a
                    href="tel:0909123456"
                    style={{ fontSize: '1.15rem', color: '#1e2a44', textDecoration: 'none' }}
                  >
                    0909 123 456
                  </a>
                </li>
              </ul>
              <div className="social-links mt-4">
                <a href="#" className="me-4" style={{ color: '#ff6b47' }}>
                  <i className="bi bi-facebook fs-2"></i>
                </a>
                <a href="#" className="me-4" style={{ color: '#ff6b47' }}>
                  <i className="bi bi-instagram fs-2"></i>
                </a>
                <a href="#" style={{ color: '#ff6b47' }}>
                  <i className="bi bi-twitter fs-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Bên phải */}
          <div className="col-md-8">
            <div
              className="contact-form p-4"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f5f6fa 100%)',
                borderRadius: '15px',
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2
                className="fw-bold mb-4"
                style={{ color: '#ff6b47', fontSize: '2rem' }}
              >
                Gửi Đề Xuất Hợp Tác
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="name" className="form-label fw-bold" style={{ color: '#1e2a44' }}>
                      Họ và Tên
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên của bạn"
                      style={{
                        borderRadius: '10px',
                        padding: '14px 20px',
                        fontSize: '1rem',
                        borderColor: '#dfe6e9',
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="email" className="form-label fw-bold" style={{ color: '#1e2a44' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Nhập email liên hệ"
                      style={{
                        borderRadius: '10px',
                        padding: '14px 20px',
                        fontSize: '1rem',
                        borderColor: '#dfe6e9',
                      }}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-bold" style={{ color: '#1e2a44' }}>
                    Nội Dung Đề Xuất
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Chia sẻ ý tưởng hoặc đề xuất hợp tác của bạn"
                    style={{
                      borderRadius: '10px',
                      padding: '14px 20px',
                      fontSize: '1rem',
                      borderColor: '#dfe6e9',
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    borderRadius: '30px',
                    padding: '14px',
                    background: 'linear-gradient(90deg, #ff6b47, #e67e22)',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Gửi Tin Nhắn
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section mb-5">
          <h2
            className="text-center fw-bold mb-4"
            style={{ color: '#ffffff', fontSize: '2rem', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)' }}
          >
            Tìm Chúng Tôi Tại Đây
          </h2>
          <div
            className="map-container"
            style={{
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.669688321847!2d106.68029231480088!3d10.759922392327156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e643%3A0x43900e614999e504!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Paradise Food Location"
            ></iframe>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/"
            className="btn btn-outline-primary btn-lg"
            style={{
              borderRadius: '30px',
              padding: '14px 35px',
              borderColor: '#ff6b47',
              color: '#ff6b47',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Quay Lại Trang Chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;