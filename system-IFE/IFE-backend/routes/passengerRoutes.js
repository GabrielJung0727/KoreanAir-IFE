const express = require('express');
const {
  getPassengerFlightInfo,
  getPersonalizedEntertainment,
  requestService,
  submitFeedback,
  getSeatInfo,
  getFlightStatus,
} = require('../controllers/passengerController');

const router = express.Router();

// 승객의 탑승 정보 조회
router.get('/:passengerId/flight-info', getPassengerFlightInfo);

// 개인화된 엔터테인먼트 추천
router.get('/:passengerId/entertainment', getPersonalizedEntertainment);

// 기내 서비스 요청
router.post('/:passengerId/request-service', requestService);

// 피드백 제출
router.post('/:passengerId/feedback', submitFeedback);

// 좌석 상태 및 위치 조회
router.get('/:passengerId/seat-info', getSeatInfo);

// 실시간 항공편 정보 조회
router.get('/flight-status/:flightId', getFlightStatus);

module.exports = router;
