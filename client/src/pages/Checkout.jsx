// src/pages/Checkout.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLocation } from 'react-router-dom'; // Thêm useLocation
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {
  const { cart } = useCart();
  const { user } = useAuth();
  const location = useLocation(); // Lấy state từ navigate
  const userId = user ? user.user_id : null;
  const restaurantId = location.state?.restaurantId || (cart.length > 0 ? cart[0].restaurant_id : null);

  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [promoCode, setPromoCode] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!shippingAddress) {
      alert('Vui lòng nhập địa chỉ giao hàng!');
      return;
    }

    const data = {
      userId,
      restaurantId,
      shippingAddress,
      items: cart,
      paymentMethod,
      promoCode,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/checkout', data);
      alert(response.data.message);
    } catch (error) {
      alert('Thanh toán thất bại!');
    }
  };

  if (!user) {
    return <div>Vui lòng đăng nhập để thanh toán!</div>;
  }

  if (cart.length === 0) {
    return <div>Giỏ hàng trống!</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Thanh Toán Đơn Hàng</h2>
      {/* Phần giao diện giữ nguyên như trước */}
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Giỏ Hàng</h4>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.menu_id} className="list-group-item d-flex justify-content-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>{(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ</span>
              </li>
            ))}
          </ul>
          <h5 className="mt-3 text-end">Tổng tiền: {total.toLocaleString('vi-VN')} VNĐ</h5>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">Thông Tin Giao Hàng</h4>
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            placeholder="Nhập địa chỉ của bạn"
          />
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-info text-white">
          <h4 className="mb-0">Phương Thức Thanh Toán</h4>
        </div>
        <div className="card-body">
          <select
            className="form-select"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="cash">Tiền mặt</option>
            <option value="card">Thẻ tín dụng</option>
            <option value="online">Thanh toán online</option>
          </select>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-warning text-white">
          <h4 className="mb-0">Mã Giảm Giá</h4>
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Ví dụ: PROMO2025"
          />
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-success btn-lg" onClick={handleCheckout}>
          Xác Nhận Thanh Toán
        </button>
      </div>
    </div>
  );
};

export default Checkout;