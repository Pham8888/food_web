// backend/models/user.js
const db = require('../config/db');

const User = {
  create: async (name, email, password, address, phone) => {
    const [result] = await db.query(
      'INSERT INTO users (name, email, password, address, phone) VALUES (?, ?, ?, ?, ?)',
      [name, email, password, address, phone]
    );
    return { id: result.insertId, name, email };
  },

  findByEmail: async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  },
  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },

  update: async (id, name, email, password, address, phone) => {
    const [result] = await db.query(
      'UPDATE users SET name = ?, email = ?, password = ?, address = ?, phone = ? WHERE id = ?',
      [name, email, password, address, phone, id]
    );
    if (result.affectedRows === 0) throw new Error('Không tìm thấy người dùng');
    return { id, name, email, address, phone };
  },
};

module.exports = User;