const { DataTypes } = require('sequelize');
const  sequelize  = require('../config/database'); // 데이터베이스 연결 설정 파일

const Entertainment = sequelize.define('Entertainment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('Movie', 'TV', 'Music', 'Kids Movie', 'Kids TV', 'Kids Music'),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ageRestriction: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      min: 0,
      max: 5,
    },
  },
  thumbnailUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isRecommended: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  aiRecommendationData: {
    type: DataTypes.JSON,
    allowNull: true,
  },
}, {
  timestamps: true,
  tableName: 'entertainment',
});

module.exports = Entertainment;
