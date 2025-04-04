import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import Navbar
import '../css/Home.css';
import '../css/Navbar.css';


const Home = () => {
  const [timeLeft, setTimeLeft] = useState(1 * 1 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const flashDeals = [
    { id: 1, name: 'Phở Bò', oldPrice: 50000, newPrice: 35000, image: '../images/pho.jpg' },
    { id: 2, name: 'Bún Chả', oldPrice: 45000, newPrice: 30000, image: '../images/comsuon.jpg' },
    { id: 3, name: 'Cơm Tấm', oldPrice: 40000, newPrice: 25000, image: '../images/bun_cha.jpg' },
  ];

  const menuCategories = [
    { title: 'Bữa sáng', description: 'Bắt đầu ngày mới với những món ăn nhẹ nhàng, bổ dưỡng.', icon: 'bi-egg-fried' },
    { title: 'Bữa chính', description: 'Bữa ăn đầy đủ năng lượng cho ngày dài năng động.', icon: 'bi-star' },
    { title: 'Thức uống', description: 'Giải khát với các loại nước tươi mát, đa dạng.', icon: 'bi-cup-straw' },
    { title: 'Tráng miệng', description: 'Kết thúc bữa ăn bằng những món ngọt ngào.', icon: 'bi-cake2' },
  ];

  return (
    <>
      <Navbar /> {/* Sử dụng Navbar component */}

      <div className="container my-5" style={{ paddingTop: '70px' }}>
        <div id="bannerCarousel" className="carousel slide mb-5" data-bs-ride="carousel" style={{ width: '100%' }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../images/banner1.jpg"
                className="d-block w-100"
                alt="Banner 1"
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block text-dark">
                <h1 className="display-4 fw-bold">Chào mừng đến với Food Order App</h1>
                <p className="lead">Đặt món ăn yêu thích với giá ưu đãi hôm nay.</p>
                <Link to="/menu" className="btn custom-order-btn btn-lg mt-3">Đặt món ngay</Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../images/banner2.jpg"
                className="d-block w-100"
                alt="Banner 2"
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block text-dark">
                <h1 className="display-4 fw-bold">Ưu đãi Cơm Tấm!</h1>
                <p className="lead">Chỉ 25.000 VND hôm nay.</p>
                <Link to="/menu" className="btn custom-order-btn btn-lg mt-3">Đặt ngay</Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Flash Deal Section */}
        <div className="mb-5">
          <h2 className="text-center mb-4 text-danger">Flash Deal - Ưu đãi chớp nhoáng!</h2>
          <div className="text-center mb-4">
            <span className="badge bg-danger fs-5 p-2">Còn lại: {formatTime(timeLeft)}</span>
          </div>
          <div className="row">
            {flashDeals.map((deal) => (
              <div className="col-md-4 mb-4" key={deal.id}>
                <div className="card h-100 border-0 flash-deal-card">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{deal.name}</h5>
                    <p className="card-text text-muted text-decoration-line-through">
                      {deal.oldPrice.toLocaleString()} VND
                    </p>
                    <p className="card-text text-danger fw-bold fs-5">
                      {deal.newPrice.toLocaleString()} VND
                    </p>
                    <Link
                      to="/menu"
                      className="btn"
                      style={{
                        backgroundColor: '#FFA500',
                        color: 'black',
                        border: 'none'
                      }}
                    >
                      Đặt ngay
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Menu Section */}
        <div className="mb-5">
          <h2 className="explore-menu-title mb-4">Khám Phá Menu</h2>
          <div className="row">
            {menuCategories.map((category) => (
              <div className="col-md-3 mb-4" key={category.title}>
                <div className="card h-100 border-0 menu-card">
                  <div className="card-body text-center">
                    <i className={`bi ${category.icon} fs-2 text-dark mb-3`}></i>
                    <h5 className="card-title">{category.title}</h5>
                    <p className="card-text">{category.description}</p>
                    <Link
                      to="/menu"
                      className="btn"
                      style={{
                        backgroundColor: '#FFA500',
                        color: 'black',
                        border: 'none',
                        fontWeight: 'bold'
                      }}
                    >
                      Xem ngay
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-5">
          <h2 className="explore-menu-title mb-4">Khách hàng nói gì</h2>
          <div className="row">
            {[
              { quote: 'Món ăn ngon, giao hàng nhanh!', author: 'Nguyễn Văn A' },
              { quote: 'Giá cả hợp lý, rất đáng thử.', author: 'Trần Thị B' },
              { quote: 'Dịch vụ tuyệt vời, sẽ quay lại!', author: 'Lê Văn C' },
            ].map((testimonial, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card border-0 testimonial-card">
                  <div className="card-body p-3">
                    <p>"{testimonial.quote}"</p>
                    <p className="fw-bold text-end">- {testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="row text-center my-5">
          {[
            { icon: 'bi-truck', title: 'Giao hàng nhanh', text: 'Nhận món ăn trong vòng 30 phút.' },
            { icon: 'bi-star-fill', title: 'Chất lượng cao', text: 'Nguyên liệu tươi ngon, đảm bảo vệ sinh.' },
            { icon: 'bi-wallet2', title: 'Giá cả hợp lý', text: 'Thưởng thức món ngon với giá phải chăng.' },
          ].map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 border-0 feature-card">
                <div className="card-body">
                  <i className={`bi ${feature.icon} fs-1 feature-icon mb-3`}></i>
                  <h5 className="card-title mt-3">{feature.title}</h5>
                  <p className="card-text">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating CTA Button */}
        <Link to="/menu" className="btn btn-danger btn-lg rounded-circle position-fixed bottom-0 end-0 m-4" style={{ zIndex: 1000 }}>
          <i className="bi bi-cart"></i>
        </Link>
      </div>

    </>
  );
};

export default Home;