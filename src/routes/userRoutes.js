import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUserProfile,
  updateUserStats,
  deleteUser,
} from '../controllers/userController.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// User routes (authenticated)
router.put('/profile', authenticate, updateUserProfile);
router.put('/stats', authenticate, updateUserStats);

// Admin routes
router.get('/', authenticate, requireAdmin, getAllUsers);
router.get('/:id', authenticate, requireAdmin, getUserById);
router.delete('/:id', authenticate, requireAdmin, deleteUser);

export default router;
