const express = require('express');
const {
  recommendEntertainment,
  aiRecommendEntertainment,
  getHealthTips,
  getDestinationRecommendations,
} = require('../../../services/recommendationService');

const router = express.Router();

// 개인화된 콘텐츠 추천
router.get('/:passengerId/entertainment', async (req, res) => {
  try {
    const { passengerId } = req.params;
    const recommendations = await recommendEntertainment(passengerId);
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching entertainment recommendations', error: error.message });
  }
});

// AI 기반 콘텐츠 추천
router.get('/:passengerId/ai-entertainment', async (req, res) => {
  try {
    const { passengerId } = req.params;
    const recommendations = await aiRecommendEntertainment(passengerId);
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching AI entertainment recommendations', error: error.message });
  }
});

// 건강 알림 제공
router.get('/health-tips', async (req, res) => {
  try {
    const { flightDuration } = req.query; // 비행 시간(시간 단위)을 쿼리로 전달
    const healthTips = await getHealthTips(Number(flightDuration));
    res.status(200).json(healthTips);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching health tips', error: error.message });
  }
});

// 도착지 주요 정보 제공
router.get('/:passengerId/destination', async (req, res) => {
  try {
    const { passengerId } = req.params;
    const { destination } = req.query; // 도착지 이름을 쿼리로 전달
    const recommendations = await getDestinationRecommendations(passengerId, destination);
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destination recommendations', error: error.message });
  }
});

module.exports = router;
