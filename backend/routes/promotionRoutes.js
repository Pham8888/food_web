// backend/routes/promotionRoutes.js
const express = require('express');
const router = express.Router();
const promotionController = require('../controller/promotionController');

router.get('/promotions/:code', promotionController.getPromotionByCode);

module.exports = router;