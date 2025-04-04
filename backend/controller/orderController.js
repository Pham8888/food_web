// backend/controllers/orderController.js
const Order = require('../models/order');

const orderController = {
  createOrder: async (req, res) => {
    const { userId, cartItems } = req.body;
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    try {
      const orderId = await Order.create(userId, total);
      for (const item of cartItems) {
        await Order.createItem(orderId, item.id, item.quantity, item.price);
      }
      res.status(201).json({ message: 'Đơn hàng đã được tạo', orderId });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = orderController;