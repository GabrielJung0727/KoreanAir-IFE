const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Feedback = sequelize.define('Feedback', {
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
  category: {
    type: DataTypes.ENUM('Service', 'Entertainment', 'Comfort'),
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 0,
      max: 5,
    },
  },
}, {
  timestamps: true,
  tableName: 'feedback', // 테이블 이름을 'feedback'으로 설정
});

module.exports = Feedback;
