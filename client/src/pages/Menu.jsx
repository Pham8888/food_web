// src/pages/Menu.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
  const { restaurantId } = useParams();
  const { addToCart } = useCart();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching menu for restaurant:', restaurantId);
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/menu/${restaurantId}`);
        console.log('API Response:', response.data);
        setMenuItems(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Fetch Error:', err.message);
        setError('Không thể tải menu! ' + err.message);
        setLoading(false);
      }
    };
    fetchMenu();
  }, [restaurantId]);

  const handleAddToCart = (item) => {
    const cartItem = {
      menu_id: item.menu_id,
      name: item.name,
      price: item.price,
      quantity: 1,
      restaurant_id: restaurantId,
    };
    addToCart(cartItem);
    alert(`${item.name} đã được thêm vào giỏ hàng!`);
  };

  if (loading) return <div className="text-center mt-5">Đang tải...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;

  console.log('Rendering menuItems:', menuItems);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Menu Nhà Hàng</h2>
      {menuItems.length === 0 ? (
        <p className="text-center">Không có món ăn nào trong menu!</p>
      ) : (
        <div className="row">
          {menuItems.map((item) => (
            <div key={item.menu_id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                {item.image && (
                  <img
                    src={`http://localhost:5000${item.image}`}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description || 'Không có mô tả'}</p>
                  <p className="card-text">
                    <strong>Giá: </strong>{item.price.toLocaleString('vi-VN')} VNĐ
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;