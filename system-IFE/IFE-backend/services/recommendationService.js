const Entertainment = require('../models/Entertainment');
const Passenger = require('../models/Passenger');
const PassengerPreferences = require('../models/PassengerPreferences');
const FlightHealthTips = require('../models/FlightHealthTips');

// 개인화된 콘텐츠 추천
const recommendEntertainment = async (passengerId) => {
  try {
    const preferences = await PassengerPreferences.findOne({
      where: { passengerId },
    });

    if (!preferences) {
      throw new Error('Passenger preferences not found');
    }

    const recommendedContent = await Entertainment.findAll({
      where: {
        genre: preferences.favoriteGenres || [], // 선호 장르
        language: preferences.preferredLanguage || 'English', // 언어
      },
      order: [['rating', 'DESC']], // 평점 순 정렬
      limit: 5,
    });

    return recommendedContent;
  } catch (error) {
    console.error('Error recommending entertainment:', error.message);
    throw error;
  }
};

// AI 기반 콘텐츠 추천
const aiRecommendEntertainment = async (passengerId) => {
  try {
    const passenger = await Passenger.findByPk(passengerId);

    if (!passenger) {
      throw new Error('Passenger not found');
    }

    const pastData = await Entertainment.findAll({
      where: { id: passenger.watchedContentIds }, // 과거 시청 콘텐츠
    });

    const genreCount = {};
    pastData.forEach((content) => {
      genreCount[content.genre] = (genreCount[content.genre] || 0) + 1;
    });

    const favoriteGenre = Object.keys(genreCount).reduce((a, b) =>
      genreCount[a] > genreCount[b] ? a : b
    );

    const recommendedContent = await Entertainment.findAll({
      where: { genre: favoriteGenre },
      order: [['rating', 'DESC']],
      limit: 5,
    });

    return recommendedContent;
  } catch (error) {
    console.error('Error in AI recommendation:', error.message);
    throw error;
  }
};

// 콘텐츠 인기 순위 제공
const getPopularContent = async () => {
  try {
    const popularContent = await Entertainment.findAll({
      order: [['views', 'DESC']],
      limit: 10,
    });

    return popularContent;
  } catch (error) {
    console.error('Error fetching popular content:', error.message);
    throw error;
  }
};

// 지역 기반 추천 (출발지/도착지에 맞는 콘텐츠 추천)
const recommendContentByRegion = async (region) => {
  try {
    const regionContent = await Entertainment.findAll({
      where: {
        region,
      },
      order: [['rating', 'DESC']],
      limit: 5,
    });

    return regionContent;
  } catch (error) {
    console.error('Error in regional recommendation:', error.message);
    throw error;
  }
};

// 건강 알림 제공
const getHealthTips = async (flightDuration) => {
  try {
    let durationCategory;
    if (flightDuration <= 3) {
      durationCategory = 'short';
    } else if (flightDuration <= 6) {
      durationCategory = 'medium';
    } else {
      durationCategory = 'long';
    }

    const healthTips = await FlightHealthTips.findAll({
      where: { flightDurationRange: durationCategory },
      order: [['createdAt', 'ASC']],
    });

    return healthTips;
  } catch (error) {
    console.error('Error fetching health tips:', error.message);
    throw error;
  }
};

// 도착지 주요 정보 제공
const getDestinationRecommendations = async (passengerId, destination) => {
  try {
    const preferences = await PassengerPreferences.findOne({
      where: { passengerId },
    });

    if (!preferences) {
      throw new Error('Passenger preferences not found');
    }

    // 도착지 추천 콘텐츠
    const recommendations = {
      weather: `Weather data for ${destination}`, // 외부 API 연동 필요
      currency: `Exchange rate data for ${destination}`, // 외부 API 연동 필요
      publicTransport: `Public transport options in ${destination}`, // 외부 API 연동 필요
    };

    return recommendations;
  } catch (error) {
    console.error('Error fetching destination recommendations:', error.message);
    throw error;
  }
};

module.exports = {
  recommendEntertainment,
  aiRecommendEntertainment,
  getPopularContent,
  recommendContentByRegion,
  getHealthTips,
  getDestinationRecommendations,
};
