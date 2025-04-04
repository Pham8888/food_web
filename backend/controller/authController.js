// backend/controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../models/user');

const authController = {
  register: async (req, res) => {
    const { name, email, password, address, phone } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create(name, email, hashedPassword, address, phone);
      res.status(201).json({ id: user.id, name, email });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findByEmail(email);
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
      }
      res.json({ id: user.id, name: user.name, email: user.email, role: user.role });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProfile: async (req, res) => {
    const userId = req.body.userId; // Giả lập, sau này dùng token
    try {
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ message: 'Không tìm thấy người dùng' });
      res.json({ id: user.id, name: user.name, email: user.email, address: user.address, phone: user.phone });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateProfile: async (req, res) => {
    const userId = req.body.userId; // Giả lập, sau này dùng token
    const { name, email, phone, address, password } = req.body;
    try {
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

      const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password;
      const updatedUser = await User.update(userId, name, email, hashedPassword, address, phone);
      res.json({ id: updatedUser.id, name, email, address, phone });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;