const express = require('express');
const { getDestinationInfo } = require('../../../services/destinationServices');

const router = express.Router();

// 도착지 주요 정보 제공
router.get('/', async (req, res) => {
  try {
    const { destination, currency } = req.query;

    if (!destination || !currency) {
      return res.status(400).json({ message: 'Required query parameters: destination, currency' });
    }

    const destinationInfo = await getDestinationInfo(destination, currency);
    res.status(200).json(destinationInfo);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destination information', error: error.message });
  }
});

module.exports = router;
