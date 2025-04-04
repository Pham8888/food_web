// src/pages/Restaurants.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/restaurants');
      if (!response.ok) throw new Error('Không thể lấy danh sách nhà hàng');
      const data = await response.json();
      setRestaurants(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5" style={{ paddingTop: '70px' }}>
      <h2 className="text-center mb-4">Danh sách nhà hàng</h2>
      {loading ? (
        <p>Đang tải...</p>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <div className="row">
          {restaurants.map((restaurant) => (
            <div className="col-md-4 mb-4" key={restaurant.restaurant_id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <p className="card-text">{restaurant.address}</p>
                  <p className="card-text text-muted">{restaurant.description}</p>
                  <Link to={`/menu/${restaurant.restaurant_id}`} className="btn btn-primary">
                    Xem thực đơn
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurants;