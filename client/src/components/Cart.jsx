import React, { useState } from 'react';
import FoodList from './FoodList';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  return (
    <div>
      <h1>Ứng dụng đặt đồ ăn</h1>
      <FoodList addToCart={addToCart} />
      <h2>Giỏ hàng</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - {item.price} VND</li>
        ))}
      </ul>
    </div>
  );
}

export default App;