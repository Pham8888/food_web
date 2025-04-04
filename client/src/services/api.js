import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getFoods = async () => {
  const response = await axios.get(`${API_URL}/foods`);
  return response.data;
};

export const createOrder = async (order) => {
  const response = await axios.post(`${API_URL}/foods/order`, order);
  return response.data;
};

export const getOrders = async () => {
  const response = await axios.get(`${API_URL}/foods/orders`);
  return response.data;
};