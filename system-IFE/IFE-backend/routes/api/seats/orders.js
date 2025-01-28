const express = require('express');
const {
  createOrder,
  updateOrderStatus,
  getOrdersByPassenger,
  getAllOrders,
} = require('../../../services/orderService');

const router = express.Router();

// 특정 승객의 주문 조회
router.get('/:passengerId', async (req, res) => {
  try {
    const { passengerId } = req.params;

    const orders = await getOrdersByPassenger(passengerId);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders for passenger', error: error.message });
  }
});

// 모든 주문 조회 (승무원/관리자 전용)
router.get('/', async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching all orders', error: error.message });
  }
});

// 주문 생성
router.post('/', async (req, res) => {
  try {
    const { passengerId, seatNumber, items, totalPrice } = req.body;

    if (!passengerId || !seatNumber || !items || totalPrice === undefined) {
      return res.status(400).json({ message: 'All fields are required: passengerId, seatNumber, items, totalPrice' });
    }

    const newOrder = await createOrder(passengerId, seatNumber, items, totalPrice);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
});

// 주문 상태 업데이트
router.put('/:orderId/status', async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: 'Order status is required' });
    }

    const updatedOrder = await updateOrderStatus(orderId, status);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error updating order status', error: error.message });
  }
});

module.exports = router;
