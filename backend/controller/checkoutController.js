// src/controllers/checkoutController.js
import { useState } from 'react';
import axios from 'axios';
import { calculateTotal } from '../models/checkoutModel';

export const useCheckout = (cart, userId, restaurantId) => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [promoCode, setPromoCode] = useState('');
  const total = calculateTotal(cart); // Tạm thời chưa áp dụng promoCode ở đây

  const handleCheckout = async () => {
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

  return {
    shippingAddress,
    setShippingAddress,
    paymentMethod,
    setPaymentMethod,
    promoCode,
    setPromoCode,
    total,
    handleCheckout,
  };
};