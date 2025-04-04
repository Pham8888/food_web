// backend/models/Payment.js
const db = require('../config/db');

class Payment {
  static async createOrder(userId, restaurantId, total, shippingAddress, items) {
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      const [orderResult] = await connection.query(
        'INSERT INTO orders (user_id, restaurant_id, total, shipping_address) VALUES (?, ?, ?, ?)',
        [userId, restaurantId, total, shippingAddress]
      );
      const orderId = orderResult.insertId;

      for (const item of items) {
        await connection.query(
          'INSERT INTO order_details (order_id, menu_id, quantity, price) VALUES (?, ?, ?, ?)',
          [orderId, item.menu_id, item.quantity, item.price]
        );
      }

      await connection.commit();
      return orderId;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  static async createPayment(orderId, amount, paymentMethod) {
    const [result] = await db.query(
      'INSERT INTO payments (order_id, amount, payment_method) VALUES (?, ?, ?)',
      [orderId, amount, paymentMethod]
    );
    return result.insertId;
  }
}

module.exports = Payment;