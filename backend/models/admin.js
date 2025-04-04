// backend/models/admin.js
const db = require('../config/db');

const Admin = {
  findByEmail: async (email) => {
    const [rows] = await db.query('SELECT * FROM Admins WHERE email = ?', [email]);
    return rows[0];
  },
};

module.exports = Admin;