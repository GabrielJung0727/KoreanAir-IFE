const Crew = require('../models/Crew');

// 승무원 전체 조회
const getAllCrew = async (req, res) => {
  try {
    const crew = await Crew.findAll();
    res.status(200).json(crew);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching crew data', error: error.message });
  }
};

// 특정 승무원 조회
const getCrewById = async (req, res) => {
  try {
    const { id } = req.params;
    const crew = await Crew.findByPk(id);
    if (!crew) {
      return res.status(404).json({ message: 'Crew member not found' });
    }
    res.status(200).json(crew);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching crew member', error: error.message });
  }
};

// 현재 운행 중인 승무원 조회
const getActiveCrew = async (req, res) => {
  try {
    const activeCrew = await Crew.findAll({ where: { status: 'Active' } });
    res.status(200).json(activeCrew);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching active crew members', error: error.message });
  }
};

// 언어 능력 기반 승무원 검색
const getCrewByLanguage = async (req, res) => {
  try {
    const { language } = req.query;
    const crew = await Crew.findAll({ where: { languages: { [Op.contains]: [language] } } });
    res.status(200).json(crew);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching crew by language', error: error.message });
  }
};

// 승무원 추가
const addCrew = async (req, res) => {
  try {
    const { name, role, assignedFlight, contactNumber, languages } = req.body;
    const newCrew = await Crew.create({ name, role, assignedFlight, contactNumber, languages });
    res.status(201).json(newCrew);
  } catch (error) {
    res.status(500).json({ message: 'Error adding crew member', error: error.message });
  }
};

// 승무원 정보 수정
const updateCrew = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, assignedFlight, contactNumber, languages, status } = req.body;
    const crew = await Crew.findByPk(id);

    if (!crew) {
      return res.status(404).json({ message: 'Crew member not found' });
    }

    crew.name = name || crew.name;
    crew.role = role || crew.role;
    crew.assignedFlight = assignedFlight || crew.assignedFlight;
    crew.contactNumber = contactNumber || crew.contactNumber;
    crew.languages = languages || crew.languages;
    crew.status = status || crew.status;

    await crew.save();
    res.status(200).json(crew);
  } catch (error) {
    res.status(500).json({ message: 'Error updating crew member', error: error.message });
  }
};

// 승무원 삭제
const deleteCrew = async (req, res) => {
  try {
    const { id } = req.params;
    const crew = await Crew.findByPk(id);

    if (!crew) {
      return res.status(404).json({ message: 'Crew member not found' });
    }

    await crew.destroy();
    res.status(200).json({ message: 'Crew member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting crew member', error: error.message });
  }
};

// 승무원 활동 기록 조회
const getCrewActivityLog = async (req, res) => {
  try {
    const { id } = req.params;
    const activityLog = await Crew.findAll({
      where: { id },
      include: ['ActivityLogs'],
    });

    if (!activityLog.length) {
      return res.status(404).json({ message: 'No activity logs found for this crew member' });
    }

    res.status(200).json(activityLog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activity logs', error: error.message });
  }
};

// AI 기반 근무 추천
const recommendCrewForFlight = async (req, res) => {
  try {
    const { flightId } = req.body;

    const recommendedCrew = await Crew.findAll({
      where: {
        status: 'Available',
        // 가중치를 추가해 AI 추천 알고리즘 구현 가능
      },
      limit: 5,
    });

    res.status(200).json(recommendedCrew);
  } catch (error) {
    res.status(500).json({ message: 'Error recommending crew members', error: error.message });
  }
};

module.exports = {
  getAllCrew,
  getCrewById,
  getActiveCrew,
  getCrewByLanguage,
  addCrew,
  updateCrew,
  deleteCrew,
  getCrewActivityLog,
  recommendCrewForFlight,
};
