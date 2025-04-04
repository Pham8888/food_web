// backend/models/promotion.js
const db = require('../config/db');

const Promotion = {
  findByCode: async (code) => {
    const [rows] = await db.query(
      'SELECT * FROM Promotions WHERE code = ? AND is_active = TRUE AND NOW() BETWEEN start_date AND end_date',
      [code]
    );
    return rows[0];
  },
};

module.exports = Promotion;