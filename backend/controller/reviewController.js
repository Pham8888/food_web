// backend/controllers/reviewController.js
const Review = require('../models/review');

const reviewController = {
  createReview: async (req, res) => {
    const { userId, menuId, restaurantId, rating, comment } = req.body;
    try {
      const reviewId = await Review.create(userId, menuId, restaurantId, rating, comment);
      res.status(201).json({ message: 'Đánh giá đã được tạo', reviewId });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getReviewsByRestaurant: async (req, res) => {
    const { restaurantId } = req.params;
    try {
      const reviews = await Review.findByRestaurant(restaurantId);
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = reviewController;