import React, { useEffect, useState } from 'react';
import { getFoods } from '../services/api';

const FoodList = ({ addToCart }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const data = await getFoods();
      setFoods(data);
    };
    fetchFoods();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            {food.name} - {food.price} VND
            <button onClick={() => addToCart(food)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;