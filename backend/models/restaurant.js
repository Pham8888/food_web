// backend/models/restaurant.js
const db = require('../config/db');

const Restaurant = {
  findAll: async () => {
    const [rows] = await db.query('SELECT * FROM Restaurants WHERE is_active = TRUE');
    return rows;
  },
  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Restaurants WHERE restaurant_id = ?', [id]);
    return rows[0];
  },
};

module.exports = Restaurant;