const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SeatControl = sequelize.define('SeatControl', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  seatNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // 좌석 번호는 고유해야 함
  },
  reclinePosition: {
    type: DataTypes.FLOAT, // 좌석 기울기 (0~100% 범위)
    allowNull: false,
    defaultValue: 0.0,
  },
  lightIntensity: {
    type: DataTypes.FLOAT, // 조명 밝기 (0~100%)
    allowNull: false,
    defaultValue: 50.0,
  },
  temperatureSetting: {
    type: DataTypes.FLOAT, // 좌석 온도 (예: 18~30°C)
    allowNull: false,
    defaultValue: 24.0,
  },
  airFlowSetting: {
    type: DataTypes.FLOAT, // 좌석 바람 세기 (0~100%)
    allowNull: false,
    defaultValue: 50.0,
  },
  occupantId: {
    type: DataTypes.UUID, // 현재 좌석을 사용하는 승객 ID
    allowNull: true,
    references: {
      model: 'Passengers',
      key: 'id',
    },
  },
}, {
  timestamps: true,
  tableName: 'seatcontrol',
});

module.exports = SeatControl;
