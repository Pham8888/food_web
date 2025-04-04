// backend/models/menuItem.js
const db = require('../config/db');

const MenuItem = {
  findAll: async () => {
    const [rows] = await db.query('SELECT * FROM menu_items');
    return rows;
  },

  create: async (name, price, category, image) => {
    const [result] = await db.query(
      'INSERT INTO menu_items (name, price, category, image) VALUES (?, ?, ?, ?)',
      [name, price, category, image]
    );
    return { id: result.insertId, name, price, category, image };
  },

  update: async (id, name, price, category, image) => {
    const [result] = await db.query(
      'UPDATE menu_items SET name = ?, price = ?, category = ?, image = ? WHERE id = ?',
      [name, price, category, image, id]
    );
    if (result.affectedRows === 0) throw new Error('Không tìm thấy món ăn');
    return { id, name, price, category, image };
  },

  delete: async (id) => {
    const [result] = await db.query('DELETE FROM menu_items WHERE id = ?', [id]);
    if (result.affectedRows === 0) throw new Error('Không tìm thấy món ăn');
  },
};

module.exports = MenuItem;