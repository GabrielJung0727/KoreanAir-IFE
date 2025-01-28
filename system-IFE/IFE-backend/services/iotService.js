const SeatControl = require('../models/SeatControl');

// 좌석 상태 조회
const getSeatStatus = async (seatNumber) => {
  try {
    const seatStatus = await SeatControl.findOne({ where: { seatNumber } });

    if (!seatStatus) {
      throw new Error(`Seat with number ${seatNumber} not found`);
    }

    return seatStatus;
  } catch (error) {
    console.error('Error fetching seat status:', error.message);
    throw error;
  }
};

// 좌석 상태 업데이트
const updateSeatStatus = async (seatNumber, updates) => {
  try {
    const seat = await SeatControl.findOne({ where: { seatNumber } });

    if (!seat) {
      throw new Error(`Seat with number ${seatNumber} not found`);
    }

    const updatedSeat = await seat.update(updates);

    return updatedSeat;
  } catch (error) {
    console.error('Error updating seat status:', error.message);
    throw error;
  }
};

// 좌석 초기화
const resetSeatStatus = async (seatNumber) => {
  try {
    const seat = await SeatControl.findOne({ where: { seatNumber } });

    if (!seat) {
      throw new Error(`Seat with number ${seatNumber} not found`);
    }

    const defaultStatus = {
      reclinePosition: 0.0,
      lightIntensity: 50.0,
      temperatureSetting: 24.0,
      airFlowSetting: 50.0,
    };

    const resetSeat = await seat.update(defaultStatus);

    return resetSeat;
  } catch (error) {
    console.error('Error resetting seat status:', error.message);
    throw error;
  }
};

module.exports = {
  getSeatStatus,
  updateSeatStatus,
  resetSeatStatus,
};
