const Feedback = require('../models/Feedback');

// 피드백 생성
const createFeedback = async (passengerId, flightId, category, message, rating) => {
  try {
    const newFeedback = await Feedback.create({
      passengerId,
      flightId,
      category,
      message,
      rating,
    });
    return newFeedback;
  } catch (error) {
    console.error('Error creating feedback:', error.message);
    throw error;
  }
};

// 특정 승객의 피드백 조회
const getFeedbackByPassenger = async (passengerId) => {
  try {
    const feedbacks = await Feedback.findAll({
      where: { passengerId },
    });
    return feedbacks;
  } catch (error) {
    console.error('Error fetching feedback for passenger:', error.message);
    throw error;
  }
};

// 특정 항공편의 피드백 조회
const getFeedbackByFlight = async (flightId) => {
  try {
    const feedbacks = await Feedback.findAll({
      where: { flightId },
    });
    return feedbacks;
  } catch (error) {
    console.error('Error fetching feedback for flight:', error.message);
    throw error;
  }
};

// 피드백 삭제
const deleteFeedback = async (feedbackId) => {
  try {
    const deletedCount = await Feedback.destroy({
      where: { id: feedbackId },
    });

    if (deletedCount === 0) {
      throw new Error(`Feedback with ID ${feedbackId} not found`);
    }

    return { message: 'Feedback deleted successfully' };
  } catch (error) {
    console.error('Error deleting feedback:', error.message);
    throw error;
  }
};

module.exports = {
  createFeedback,
  getFeedbackByPassenger,
  getFeedbackByFlight,
  deleteFeedback,
};
