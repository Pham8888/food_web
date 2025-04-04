// backend/controllers/MenuController.js
const Menu = require('../models/menu');

class MenuController {
  async getMenu(req, res) {
    const { restaurantId } = req.params;
    try {
      const menuItems = await Menu.getMenuByRestaurant(restaurantId);
      console.log('Menu Items:', menuItems);
      res.status(200).json(menuItems);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Lỗi khi lấy menu', error: error.message });
    }
  }
}

module.exports = new MenuController();