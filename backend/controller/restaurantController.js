// backend/controllers/restaurantController.js
const Restaurant = require('../models/restaurant');

const restaurantController = {
  getRestaurants: async (req, res) => {
    try {
      const restaurants = await Restaurant.findAll();
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getRestaurantById: async (req, res) => {
    const { id } = req.params;
    try {
      const restaurant = await Restaurant.findById(id);
      if (!restaurant) return res.status(404).json({ message: 'Không tìm thấy nhà hàng' });
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = restaurantController;