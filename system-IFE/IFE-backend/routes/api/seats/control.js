const express = require('express');
const { getSeatStatus, updateSeatStatus, resetSeatStatus } = require('../../../services/iotService');

const router = express.Router();

// 좌석 상태 조회
router.get('/:seatNumber', async (req, res) => {
  try {
    const { seatNumber } = req.params;

    const seatStatus = await getSeatStatus(seatNumber);
    res.status(200).json(seatStatus);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching seat status', error: error.message });
  }
});

// 좌석 상태 업데이트
router.put('/:seatNumber', async (req, res) => {
  try {
    const { seatNumber } = req.params;
    const updates = req.body;

    const updatedSeat = await updateSeatStatus(seatNumber, updates);
    res.status(200).json(updatedSeat);
  } catch (error) {
    res.status(500).json({ message: 'Error updating seat status', error: error.message });
  }
});

// 좌석 상태 초기화
router.post('/:seatNumber/reset', async (req, res) => {
  try {
    const { seatNumber } = req.params;

    const resetSeat = await resetSeatStatus(seatNumber);
    res.status(200).json(resetSeat);
  } catch (error) {
    res.status(500).json({ message: 'Error resetting seat status', error: error.message });
  }
});

module.exports = router;
