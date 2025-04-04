const db = require('../config/db');

class Menu {
  static async getMenuByRestaurant(restaurantId) {
    const [rows] = await db.query(
      'SELECT * FROM menu WHERE restaurant_id = ? AND is_available = 1',
      [restaurantId]
    );
    console.log('Database Query Result:', rows);
    return rows;
  }
}

module.exports = Menu;