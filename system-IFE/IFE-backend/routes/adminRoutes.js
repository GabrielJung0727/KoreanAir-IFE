const express = require('express');
const { getAllPassengers, updatePassengerRole, getSystemStatus, addEntertainment, deleteEntertainment, generateReport, generateAIPrediction } = require('../controllers/adminController');

const router = express.Router();

// 모든 승객 조회
router.get('/passengers', getAllPassengers);

// 승객 권한 수정
router.put('/passengers/:passengerId/role', updatePassengerRole);

// 시스템 상태 모니터링
router.get('/system-status', getSystemStatus);

// 콘텐츠 추가
router.post('/entertainment', addEntertainment);

// 콘텐츠 삭제
router.delete('/entertainment/:id', deleteEntertainment);

// 리포트 생성
router.get('/report', generateReport);

// AI 기반 예측 리포트
router.get('/prediction/:flightId', generateAIPrediction);

module.exports = router;
