const Passenger = require('../models/Passenger');
const Entertainment = require('../models/Entertainment');
const Flight = require('../models/Flight');
const Feedback = require('../models/Feedback');

// 승객의 탑승 정보 조회
const getPassengerFlightInfo = async (req, res) => {
  try {
    const { passengerId } = req.params;
    const passenger = await Passenger.findByPk(passengerId, {
      include: ['Flight'],
    });

    if (!passenger) {
      return res.status(404).json({ message: 'Passenger not found' });
    }

    res.status(200).json(passenger);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flight info', error: error.message });
  }
};

// 개인화된 엔터테인먼트 추천
const getPersonalizedEntertainment = async (req, res) => {
  try {
    const { passengerId } = req.params;

    const recommendedContent = await Entertainment.findAll({
      where: {
        isRecommended: true,
      },
      order: [['rating', 'DESC']],
      limit: 5,
    });

    res.status(200).json(recommendedContent);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching personalized entertainment', error: error.message });
  }
};

// 기내 서비스 요청
const requestService = async (req, res) => {
  try {
    const { passengerId } = req.params;
    const { serviceType, message } = req.body;

    const requestLog = {
      passengerId,
      serviceType,
      message,
      status: 'Pending',
    };

    // DB에 서비스 요청 저장 (여기서는 예시)
    res.status(201).json({ message: 'Service request logged successfully', requestLog });
  } catch (error) {
    res.status(500).json({ message: 'Error requesting service', error: error.message });
  }
};

// 피드백 제출
const submitFeedback = async (req, res) => {
  try {
    const { passengerId } = req.params;
    const { rating, comments } = req.body;

    const newFeedback = await Feedback.create({
      passengerId,
      rating,
      comments,
    });

    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback', error: error.message });
  }
};

// 좌석 상태 및 위치 조회
const getSeatInfo = async (req, res) => {
  try {
    const { passengerId } = req.params;

    const passenger = await Passenger.findByPk(passengerId);

    if (!passenger) {
      return res.status(404).json({ message: 'Passenger not found' });
    }

    res.status(200).json({ seat: passenger.seatNumber, status: 'Available' });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching seat info', error: error.message });
  }
};

// 실시간 항공편 정보 조회
const getFlightStatus = async (req, res) => {
  try {
    const { flightId } = req.params;

    const flight = await Flight.findByPk(flightId);

    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    res.status(200).json({
      flightNumber: flight.flightNumber,
      status: flight.status,
      estimatedArrival: flight.estimatedArrival,
      currentLocation: flight.currentLocation,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flight status', error: error.message });
  }
};

module.exports = {
  getPassengerFlightInfo,
  getPersonalizedEntertainment,
  requestService,
  submitFeedback,
  getSeatInfo,
  getFlightStatus,
};
