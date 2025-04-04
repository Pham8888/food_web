// backend/models/review.js
const db = require('../config/db');

const Review = {
  create: async (userId, menuId, restaurantId, rating, comment) => {
    const [result] = await db.query(
      'INSERT INTO Reviews (user_id, menu_id, restaurant_id, rating, comment) VALUES (?, ?, ?, ?, ?)',
      [userId, menuId, restaurantId, rating, comment]
    );
    return result.insertId;
  },
  findByRestaurant: async (restaurantId) => {
    const [rows] = await db.query('SELECT * FROM Reviews WHERE restaurant_id = ?', [restaurantId]);
    return rows;
  },
};

module.exports = Review;