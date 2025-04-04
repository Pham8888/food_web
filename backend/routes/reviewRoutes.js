// backend/routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewController');

router.post('/reviews', reviewController.createReview);
router.get('/reviews/:restaurantId', reviewController.getReviewsByRestaurant);

module.exports = router;