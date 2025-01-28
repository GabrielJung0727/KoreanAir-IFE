const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FlightHealthTips = sequelize.define('FlightHealthTips', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  flightDuration: {
    type: DataTypes.INTEGER,  // 필드가 INTEGER로 정의되어 있는지 확인
    allowNull: false,
  },
  flightDurationRange: {
    type: DataTypes.STRING,  // 'flightDurationRange'는 STRING으로 정의되어야 합니다.
    allowNull: true,
  },
  tips: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'flight_health_tips',
});

module.exports = FlightHealthTips;
