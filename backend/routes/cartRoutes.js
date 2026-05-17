import express from 'express';
import {
  getCart,
  addToCart,
  removeFromCart,
  updateCartItem,
  clearCart,
} from '../controllers/cartController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getCart);
router.post('/add', verifyToken, addToCart);
router.post('/remove', verifyToken, removeFromCart);
router.put('/update', verifyToken, updateCartItem);
router.post('/clear', verifyToken, clearCart);

export default router;
