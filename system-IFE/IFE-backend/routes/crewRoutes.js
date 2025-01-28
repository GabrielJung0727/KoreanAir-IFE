const express = require('express');
const {
  getAllCrew,
  getCrewById,
  getActiveCrew,
  getCrewByLanguage,
  addCrew,
  updateCrew,
  deleteCrew,
  getCrewActivityLog,
  recommendCrewForFlight,
} = require('../controllers/crewController');

const router = express.Router();

// 모든 승무원 조회
router.get('/', getAllCrew);

// 특정 승무원 조회
router.get('/:id', getCrewById);

// 운행 중인 승무원 조회
router.get('/active', getActiveCrew);

// 언어 능력 기반 승무원 검색
router.get('/language', getCrewByLanguage);

// 새로운 승무원 추가
router.post('/', addCrew);

// 특정 승무원 정보 수정
router.put('/:id', updateCrew);

// 특정 승무원 삭제
router.delete('/:id', deleteCrew);

// 승무원 활동 기록 조회
router.get('/:id/activity-log', getCrewActivityLog);

// 항공편에 적합한 승무원 추천
router.post('/recommendation', recommendCrewForFlight);

module.exports = router;
