// backend/controllers/PaymentController.js
const Payment = require('../models/payment');
const db = require('../config/db');

class PaymentController {
  async checkout(req, res) {
    const { userId, restaurantId, shippingAddress, items, paymentMethod, promoCode } = req.body;

    try {
      // Tính tổng tiền
      let total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      if (promoCode) {
        const [promo] = await db.query(
          'SELECT discount_percentage FROM promotions WHERE code = ? AND is_active = 1 AND NOW() BETWEEN start_date AND end_date',
          [promoCode]
        );
        if (promo.length > 0) {
          total = total * (1 - promo[0].discount_percentage / 100);
        }
      }

      // Tạo đơn hàng
      const orderId = await Payment.createOrder(userId, restaurantId, total, shippingAddress, items);

      // Tạo thanh toán
      await Payment.createPayment(orderId, total, paymentMethod);

      res.status(200).json({ message: 'Thanh toán thành công', orderId });
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
  }
}

module.exports = new PaymentController();