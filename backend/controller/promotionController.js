// backend/controllers/promotionController.js
const Promotion = require('../models/promotion');

const promotionController = {
  getPromotionByCode: async (req, res) => {
    const { code } = req.params;
    try {
      const promotion = await Promotion.findByCode(code);
      if (!promotion) return res.status(404).json({ message: 'Không tìm thấy khuyến mãi' });
      res.json(promotion);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = promotionController;