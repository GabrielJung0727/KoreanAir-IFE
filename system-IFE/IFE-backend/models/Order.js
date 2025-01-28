const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
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
      model: 'Passengers',
      key: 'id',
    },
  },
  seatNumber: {
    type: DataTypes.STRING, // 좌석 번호
    allowNull: false,
  },
  items: {
    type: DataTypes.JSON, // 주문 항목 (예: [{ name: 'Coke', quantity: 1 }])
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT, // 주문 총 금액
    allowNull: false,
    defaultValue: 0.0,
  },
  status: {
    type: DataTypes.ENUM('pending', 'preparing', 'delivered', 'cancelled'), // 주문 상태
    allowNull: false,
    defaultValue: 'pending',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'orders',
});

module.exports = Order;
