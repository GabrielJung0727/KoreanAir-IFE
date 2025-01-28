const express = require('express');
const router = express.Router();
const path = require('path'); // path 모듈 추가
const healthTipsService = require('../../../services/healthTipsService');

// 건강 팁 API
router.get('/', async (req, res) => {
  try {
    const { flightDuration } = req.query;

    // flightDuration을 숫자로 변환하여 전달
    const healthTips = await healthTipsService.getHealthTips(parseInt(flightDuration));

    res.status(200).json(healthTips);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching health tips', error: error.message });
  }
});

module.exports = router;
