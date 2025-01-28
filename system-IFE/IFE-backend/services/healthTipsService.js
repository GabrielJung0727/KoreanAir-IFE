const FlightHealthTips = require('../models/FlightHealthTips');

const getHealthTips = async (flightDuration) => {
  try {
    const healthTips = await FlightHealthTips.findAll({
      where: {
        flightDuration: flightDuration,
      },
    });
    return healthTips;
  } catch (error) {
    console.error('Error fetching health tips:', error.message);
    throw error;
  }
};

module.exports = {
  getHealthTips,
};
