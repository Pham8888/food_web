import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/api';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h3>Lịch sử đơn hàng</h3>
      {orders.length === 0 ? (
        <p>Chưa có đơn hàng</p>
      ) : (
        <ul className="list-group">
          {orders.map((order) => (
            <li className="list-group-item" key={order.id}>
              <p>Đơn #{order.id} - Tổng: {order.total} VND</p>
              <p>Món: {JSON.parse(order.items).map(item => item.name).join(', ')}</p>
              <p>Thời gian: {new Date(order.created_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;