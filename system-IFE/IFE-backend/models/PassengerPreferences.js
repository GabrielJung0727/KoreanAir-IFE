const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PassengerPreferences = sequelize.define('PassengerPreferences', {
  id: {
    type: DataTypes.UUID, // UUID 타입
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  passengerId: {
    type: DataTypes.UUID, // Passenger의 id와 동일한 UUID 타입
    allowNull: false,
    references: {
      model: 'passengers', // 참조 테이블 이름
      key: 'id', // 참조 열 이름
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  preferredLanguage: {
    type: DataTypes.JSON, // JSON 타입
    allowNull: true,
  },
  healthNotificationsEnabled: {
    type: DataTypes.BOOLEAN, // BOOLEAN으로 처리
    defaultValue: false,
  },
}, {
  timestamps: true,
  tableName: 'passenger_preferences',
});

module.exports = PassengerPreferences;
