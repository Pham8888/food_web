// backend/models/order.js
const db = require('../config/db');

const Order = {
  create: async (userId, total) => {
    const [result] = await db.query(
      'INSERT INTO orders (user_id, total) VALUES (?, ?)',
      [userId, total]
    );
    return result.insertId;
  },

  createItem: async (orderId, menuItemId, quantity, price) => {
    await db.query(
      'INSERT INTO order_items (order_id, menu_item_id, quantity, price) VALUES (?, ?, ?, ?)',
      [orderId, menuItemId, quantity, price]
    );
  },
};

module.exports = Order;