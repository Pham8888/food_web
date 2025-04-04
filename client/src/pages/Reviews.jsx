// src/pages/Reviews.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Reviews.css';

const Reviews = () => {
  const { restaurantId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, [restaurantId]);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/api/reviews/${restaurantId}`);
      if (!response.ok) throw new Error('Không thể lấy danh sách đánh giá');
      const data = await response.json();
      setReviews(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5" style={{ paddingTop: '70px' }}>
      <h2 className="text-center mb-4">Đánh giá nhà hàng</h2>
      {loading ? (
        <p className="text-center">Đang tải...</p>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : reviews.length === 0 ? (
        <p className="text-center text-muted">Chưa có đánh giá nào.</p>
      ) : (
        <div className="row">
          {reviews.map((review) => (
            <div className="col-md-6 mb-4" key={review.review_id}>
              <div className="card shadow-sm p-3">
                <div className="card-body">
                  <h5 className="card-title">Điểm: {review.rating}/5</h5>
                  <p className="card-text">{review.comment}</p>
                  <p className="card-text text-muted">
                    Bởi: User #{review.user_id} - {new Date(review.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;