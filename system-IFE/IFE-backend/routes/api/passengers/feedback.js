const express = require('express');
const {
  createFeedback,
  getFeedbackByPassenger,
  getFeedbackByFlight,
  deleteFeedback,
} = require('../../../services/feedbackService');

const router = express.Router();

// 피드백 생성
router.post('/', async (req, res) => {
  try {
    const { passengerId, flightId, category, message, rating } = req.body;

    if (!passengerId || !flightId || !category || rating === undefined) {
      return res.status(400).json({ message: 'Required fields: passengerId, flightId, category, rating' });
    }

    const feedback = await createFeedback(passengerId, flightId, category, message, rating);
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error creating feedback', error: error.message });
  }
});

// 특정 승객의 피드백 조회
router.get('/passenger/:passengerId', async (req, res) => {
  try {
    const { passengerId } = req.params;

    const feedbacks = await getFeedbackByPassenger(passengerId);
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedback for passenger', error: error.message });
  }
});

// 특정 항공편의 피드백 조회
router.get('/flight/:flightId', async (req, res) => {
  try {
    const { flightId } = req.params;

    const feedbacks = await getFeedbackByFlight(flightId);
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedback for flight', error: error.message });
  }
});

// 피드백 삭제
router.delete('/:feedbackId', async (req, res) => {
  try {
    const { feedbackId } = req.params;

    const result = await deleteFeedback(feedbackId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting feedback', error: error.message });
  }
});

module.exports = router;
