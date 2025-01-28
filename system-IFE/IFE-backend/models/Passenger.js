const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Passenger = sequelize.define('Passenger', {
  id: {
    type: DataTypes.UUID, // UUID 타입
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true,
  tableName: 'passengers',
});

module.exports = Passenger;
