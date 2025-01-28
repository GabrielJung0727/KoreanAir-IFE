const Passenger = require('../models/Passenger');
const Entertainment = require('../models/Entertainment');
const Flight = require('../models/Flight');

// 모든 승객 조회
const getAllPassengers = async (req, res) => {
  try {
    const passengers = await Passenger.findAll();
    res.status(200).json(passengers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching passengers', error: error.message });
  }
};

// 승객 권한 수정
const updatePassengerRole = async (req, res) => {
  try {
    const { passengerId } = req.params;
    const { role } = req.body;
    const passenger = await Passenger.findByPk(passengerId);

    if (!passenger) {
      return res.status(404).json({ message: 'Passenger not found' });
    }

    passenger.role = role || passenger.role;
    await passenger.save();
    res.status(200).json(passenger);
  } catch (error) {
    res.status(500).json({ message: 'Error updating passenger role', error: error.message });
  }
};

// 시스템 상태 모니터링
const getSystemStatus = async (req, res) => {
  try {
    const flightCount = await Flight.count();
    const activePassengers = await Passenger.count({ where: { status: 'Active' } });

    res.status(200).json({
      flights: flightCount,
      activePassengers,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching system status', error: error.message });
  }
};

// 콘텐츠 추가
const addEntertainment = async (req, res) => {
  try {
    const { type, title, genre, language, duration, ageRestriction } = req.body;
    const newContent = await Entertainment.create({
      type,
      title,
      genre,
      language,
      duration,
      ageRestriction,
    });
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: 'Error adding content', error: error.message });
  }
};

// 콘텐츠 삭제
const deleteEntertainment = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await Entertainment.findByPk(id);

    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    await content.destroy();
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting content', error: error.message });
  }
};

// 리포트 생성 및 다운로드
const generateReport = async (req, res) => {
  try {
    const { reportType } = req.query;

    const report = {
      type: reportType,
      timestamp: new Date(),
      data: [],
    };

    if (reportType === 'passengerStats') {
      report.data = await Passenger.findAll({ attributes: ['id', 'role', 'status'] });
    } else if (reportType === 'flightStats') {
      report.data = await Flight.findAll({ attributes: ['id', 'departure', 'destination', 'status'] });
    }

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error generating report', error: error.message });
  }
};

// AI 기반 예측 리포트
const generateAIPrediction = async (req, res) => {
  try {
    const { flightId } = req.params;

    const prediction = {
      flightId,
      optimizedSeating: Math.floor(Math.random() * 100),
      entertainmentDemand: ['Movie', 'Kids TV'],
    };

    res.status(200).json(prediction);
  } catch (error) {
    res.status(500).json({ message: 'Error generating AI prediction', error: error.message });
  }
};

module.exports = {
  getAllPassengers,
  updatePassengerRole,
  getSystemStatus,
  addEntertainment,
  deleteEntertainment,
  generateReport,
  generateAIPrediction,
};
