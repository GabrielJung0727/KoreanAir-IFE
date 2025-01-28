const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FlightPreferences = sequelize.define('FlightPreferences', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  passengerId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'passengers',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  flightId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'flights',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  sleepMode: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  entertainmentMode: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  doNotDisturb: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  ambientLighting: {
    type: DataTypes.STRING,
    defaultValue: 'warm',
  },
  preferences: {
    type: DataTypes.JSON, // 새로 추가된 열
    allowNull: true,
  },
}, {
  timestamps: true,
  tableName: 'flightpreferences',
});

module.exports = FlightPreferences;
