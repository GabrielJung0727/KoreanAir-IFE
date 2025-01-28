const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Sequelize 객체 가져오기

// Crew 모델 정의
const Crew = sequelize.define('Crew', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('Pilot', 'Cabin Crew', 'Ground Staff'),
    allowNull: false,
  },
  assignedFlight: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: /^[0-9\-]+$/, // 숫자와 하이픈만 허용
    },
  },
}, {
  timestamps: true, // 생성 및 업데이트 시간 자동 관리
  tableName: 'crew', // 명시적으로 테이블 이름 지정
});

module.exports = Crew;
