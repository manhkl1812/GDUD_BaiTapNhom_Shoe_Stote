import express from 'express';
import {
  createOrder,
  getMyOrders,
  getOrderById,
  updateOrderStatus,
  getAllOrders,
} from '../controllers/orderController.js';
import { verifyToken, verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, createOrder);
router.get('/my-orders', verifyToken, getMyOrders);
router.get('/all-orders', verifyAdmin, getAllOrders);
router.get('/:id', verifyToken, getOrderById);
router.put('/:id/status', verifyAdmin, updateOrderStatus);

export default router;
