const express = require('express');
const {
  toggleSleepMode,
  toggleEntertainmentMode,
  toggleDoNotDisturb,
  setAmbientLighting,
} = require('../../../services/sleepModeService');

const router = express.Router();

// 수면 모드 활성화/비활성화
router.put('/:passengerId/:flightId/sleep-mode', async (req, res) => {
  try {
    const { passengerId, flightId } = req.params;
    const { isEnabled } = req.body;

    if (isEnabled === undefined) {
      return res.status(400).json({ message: 'isEnabled is required' });
    }

    const updatedPreferences = await toggleSleepMode(passengerId, flightId, isEnabled);
    res.status(200).json(updatedPreferences);
  } catch (error) {
    res.status(500).json({ message: 'Error toggling sleep mode', error: error.message });
  }
});

// 엔터테인먼트 모드 활성화/비활성화
router.put('/:passengerId/:flightId/entertainment-mode', async (req, res) => {
  try {
    const { passengerId, flightId } = req.params;
    const { isEnabled } = req.body;

    if (isEnabled === undefined) {
      return res.status(400).json({ message: 'isEnabled is required' });
    }

    const updatedPreferences = await toggleEntertainmentMode(passengerId, flightId, isEnabled);
    res.status(200).json(updatedPreferences);
  } catch (error) {
    res.status(500).json({ message: 'Error toggling entertainment mode', error: error.message });
  }
});

// 방해 금지 모드 활성화/비활성화
router.put('/:passengerId/:flightId/do-not-disturb', async (req, res) => {
  try {
    const { passengerId, flightId } = req.params;
    const { isEnabled } = req.body;

    if (isEnabled === undefined) {
      return res.status(400).json({ message: 'isEnabled is required' });
    }

    const updatedPreferences = await toggleDoNotDisturb(passengerId, flightId, isEnabled);
    res.status(200).json(updatedPreferences);
  } catch (error) {
    res.status(500).json({ message: 'Error toggling do not disturb mode', error: error.message });
  }
});

// 조명 설정 변경
router.put('/:passengerId/:flightId/ambient-lighting', async (req, res) => {
  try {
    const { passengerId, flightId } = req.params;
    const { lightingType } = req.body;

    if (!lightingType) {
      return res.status(400).json({ message: 'lightingType is required' });
    }

    const updatedPreferences = await setAmbientLighting(passengerId, flightId, lightingType);
    res.status(200).json(updatedPreferences);
  } catch (error) {
    res.status(500).json({ message: 'Error setting ambient lighting', error: error.message });
  }
});

module.exports = router;
