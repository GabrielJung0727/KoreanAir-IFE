const FlightPreferences = require('../models/FlightPreferences');

// 수면 모드 활성화/비활성화
const toggleSleepMode = async (passengerId, flightId, isEnabled) => {
  try {
    const preferences = await FlightPreferences.findOne({
      where: { passengerId, flightId },
    });

    if (!preferences) {
      throw new Error('Flight preferences not found for this passenger and flight');
    }

    preferences.sleepMode = isEnabled;
    await preferences.save();

    return preferences;
  } catch (error) {
    console.error('Error toggling sleep mode:', error.message);
    throw error;
  }
};

// 엔터테인먼트 모드 활성화/비활성화
const toggleEntertainmentMode = async (passengerId, flightId, isEnabled) => {
  try {
    const preferences = await FlightPreferences.findOne({
      where: { passengerId, flightId },
    });

    if (!preferences) {
      throw new Error('Flight preferences not found for this passenger and flight');
    }

    preferences.entertainmentMode = isEnabled;
    await preferences.save();

    return preferences;
  } catch (error) {
    console.error('Error toggling entertainment mode:', error.message);
    throw error;
  }
};

// 방해 금지 모드 활성화/비활성화
const toggleDoNotDisturb = async (passengerId, flightId, isEnabled) => {
  try {
    const preferences = await FlightPreferences.findOne({
      where: { passengerId, flightId },
    });

    if (!preferences) {
      throw new Error('Flight preferences not found for this passenger and flight');
    }

    preferences.doNotDisturb = isEnabled;
    await preferences.save();

    return preferences;
  } catch (error) {
    console.error('Error toggling do not disturb mode:', error.message);
    throw error;
  }
};

// 조명 설정 변경
const setAmbientLighting = async (passengerId, flightId, lightingType) => {
  try {
    const preferences = await FlightPreferences.findOne({
      where: { passengerId, flightId },
    });

    if (!preferences) {
      throw new Error('Flight preferences not found for this passenger and flight');
    }

    preferences.ambientLighting = lightingType;
    await preferences.save();

    return preferences;
  } catch (error) {
    console.error('Error setting ambient lighting:', error.message);
    throw error;
  }
};

module.exports = {
  toggleSleepMode,
  toggleEntertainmentMode,
  toggleDoNotDisturb,
  setAmbientLighting,
};
