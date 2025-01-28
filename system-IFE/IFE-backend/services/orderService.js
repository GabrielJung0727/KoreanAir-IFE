const Order = require('../models/Order');

// 주문 생성
const createOrder = async (passengerId, seatNumber, items, totalPrice) => {
  try {
    const newOrder = await Order.create({
      passengerId,
      seatNumber,
      items,
      totalPrice,
      status: 'pending',
    });

    return newOrder;
  } catch (error) {
    console.error('Error creating order:', error.message);
    throw error;
  }
};

// 주문 상태 업데이트
const updateOrderStatus = async (orderId, status) => {
  try {
    const order = await Order.findByPk(orderId);

    if (!order) {
      throw new Error(`Order with ID ${orderId} not found`);
    }

    order.status = status;
    await order.save();

    return order;
  } catch (error) {
    console.error('Error updating order status:', error.message);
    throw error;
  }
};

// 특정 승객의 주문 조회
const getOrdersByPassenger = async (passengerId) => {
  try {
    const orders = await Order.findAll({ where: { passengerId } });

    return orders;
  } catch (error) {
    console.error('Error fetching orders for passenger:', error.message);
    throw error;
  }
};

// 모든 주문 조회 (승무원/관리자 전용)
const getAllOrders = async () => {
  try {
    const orders = await Order.findAll({
      order: [['createdAt', 'DESC']], // 최신 주문 순으로 정렬
    });

    return orders;
  } catch (error) {
    console.error('Error fetching all orders:', error.message);
    throw error;
  }
};

module.exports = {
  createOrder,
  updateOrderStatus,
  getOrdersByPassenger,
  getAllOrders,
};
