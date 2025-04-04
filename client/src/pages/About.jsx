import React from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';

const About = () => {
  return (
    <div className="about-page" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Hero Section */}
      <section className="hero-section py-5" style={{ background: 'linear-gradient(135deg, #fff7e6 0%, #fff1e1 100%)' }}>
        <div className="container text-center py-5">
          <h1 className="display-3 fw-bold mb-3" style={{ color: '#2d3436' }}>
            Về Paradise Food
          </h1>
          <p className="lead fs-4 text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Mang đến những bữa ăn ngon, tiện lợi và đậm chất Việt Nam cho mọi nhà!
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold mb-4" style={{ color: '#e17055' }}>Câu Chuyện Của Chúng Tôi</h2>
              <p className="text-muted fs-5" style={{ lineHeight: '1.8' }}>
                Paradise Food được sinh ra từ tình yêu với ẩm thực Việt Nam và mong muốn kết hợp nó với sự tiện lợi của công nghệ hiện đại. Từ một ý tưởng giản đơn, chúng tôi đã xây dựng một hành trình mang những bữa ăn chất lượng đến gần hơn với mọi người, tiết kiệm thời gian mà vẫn giữ trọn hương vị truyền thống.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <div className="icon-box p-4" style={{ background: '#fff', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <i className="bi bi-shop display-4 text-primary mb-3"></i>
                <p className="text-muted fs-5">Từ căn bếp nhỏ đến bàn ăn của bạn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4">
              <h2 className="fw-bold mb-4" style={{ color: '#e17055' }}>Sứ Mệnh Của Chúng Tôi</h2>
              <p className="text-muted fs-5" style={{ lineHeight: '1.8' }}>
                Chúng tôi không chỉ mang đến thức ăn, mà còn lan tỏa niềm vui và sự hài lòng qua từng món ăn. Paradise Food hướng tới trở thành người bạn đồng hành đáng tin cậy của những tín đồ yêu ẩm thực Việt Nam.
              </p>
            </div>
            <div className="col-lg-6 order-lg-1 text-center">
              <div className="icon-box p-4" style={{ background: '#fef5f1', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <i className="bi bi-heart-fill display-4 text-danger mb-3"></i>
                <p className="text-muted fs-5">Yêu thương trong từng hương vị</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#2d3436' }}>Giá Trị Cốt Lõi</h2>
          <div className="row g-4">
            {[
              { icon: 'bi-star-fill', title: 'Chất Lượng', text: 'Nguyên liệu tươi ngon, đảm bảo an toàn thực phẩm.' },
              { icon: 'bi-clock', title: 'Tiện Lợi', text: 'Đặt hàng dễ dàng, giao hàng nhanh chóng.' },
              { icon: 'bi-tree', title: 'Bền Vững', text: 'Hành động vì môi trường xanh.' },
            ].map((value, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '15px' }}>
                  <i className={`bi ${value.icon} fs-1 text-primary mb-3`}></i>
                  <h5 className="fw-bold" style={{ color: '#2d3436' }}>{value.title}</h5>
                  <p className="text-muted">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#2d3436' }}>Đội Ngũ Của Chúng Tôi</h2>
          <div className="row g-4">
            {[
              { name: 'Nguyễn Văn A', role: 'Đầu Bếp Trưởng' },
              { name: 'Trần Thị B', role: 'Quản Lý' },
              { name: 'Lê Văn C', role: 'Chuyên Viên Công Nghệ' },
            ].map((member, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '15px' }}>
                  <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
                  <h5 className="fw-bold" style={{ color: '#2d3436' }}>{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="timeline-section py-5" style={{ background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#2d3436', fontSize: '2.8rem', letterSpacing: '1px' }}>
            Hành Trình Phát Triển
          </h2>
          <div className="timeline position-relative" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="timeline-line" style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '4px',
              background: 'linear-gradient(to bottom, #e17055, #fdcb6e)',
              transform: 'translateX(-50%)',
              zIndex: 1,
            }}></div>
            {[
              {
                year: '2020',
                title: 'Khởi Đầu',
                text: 'Paradise Food chính thức ra đời tại Thành phố Hồ Chí Minh, đánh dấu bước đầu tiên trong hành trình mang ẩm thực Việt Nam đến gần hơn với mọi người.',
                icon: 'bi-geo-alt',
              },
              {
                year: '2022',
                title: 'Ứng Dụng Ra Mắt',
                text: 'Phát hành ứng dụng đặt món ăn trực tuyến, giúp khách hàng dễ dàng trải nghiệm dịch vụ tiện lợi và nhanh chóng từ bất kỳ đâu.',
                icon: 'bi-phone',
              },
              {
                year: '2025',
                title: 'Mở Rộng Toàn Quốc',
                text: 'Phủ sóng khắp Việt Nam với hơn 50 chi nhánh, khẳng định vị thế là một trong những thương hiệu ẩm thực hàng đầu.',
                icon: 'bi-globe',
              },
            ].map((milestone, index) => (
              <div
                className={`timeline-item position-relative mb-5 ${index % 2 === 0 ? 'left' : 'right'}`}
                key={index}
                style={{ zIndex: 2 }}
              >
                <div className="timeline-content position-relative">
                  <div
                    className="timeline-box"
                    style={{
                      background: '#fff',
                      borderRadius: '15px',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                      padding: '25px',
                      maxWidth: '400px',
                      position: 'relative',
                      borderLeft: '4px solid #e17055',
                    }}
                  >
                    <div className="timeline-year position-absolute" style={{
                      top: '20px',
                      left: index % 2 === 0 ? 'calc(100% + 20px)' : 'auto',
                      right: index % 2 === 0 ? 'auto' : 'calc(100% + 20px)',
                      color: '#fff',
                      background: '#e17055',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                    }}>
                      {milestone.year}
                    </div>
                    <h5 className="fw-bold mb-3" style={{ color: '#2d3436', fontSize: '1.6rem' }}>
                      {milestone.title}
                    </h5>
                    <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                      {milestone.text}
                    </p>
                  </div>
                  <div
                    className="timeline-icon position-absolute"
                    style={{
                      top: '50%',
                      left: index % 2 === 0 ? 'calc(100% + 10px)' : 'auto',
                      right: index % 2 === 0 ? 'auto' : 'calc(100% + 10px)',
                      transform: 'translateY(-50%)',
                      width: '60px',
                      height: '60px',
                      background: '#fff',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      zIndex: 3,
                    }}
                  >
                    <i className={`bi ${milestone.icon} text-primary`} style={{ fontSize: '2rem' }}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 text-center" style={{ background: 'linear-gradient(135deg, #e17055 0%, #fdcb6e 100%)' }}>
        <div className="container">
          <h3 className="fw-bold mb-4 text-white">Khám Phá Hương Vị Ngay Hôm Nay!</h3>
          <Link to="/menu" className="btn btn-light btn-lg fw-bold" style={{ padding: '12px 30px' }}>
            Xem Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;