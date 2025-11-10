import express from 'express';
import {
  getAllLessons,
  getLessonById,
  createLesson,
  updateLesson,
  deleteLesson,
} from '../controllers/lessonController.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllLessons);
router.get('/:id', getLessonById);

// Admin routes
router.post('/', authenticate, requireAdmin, createLesson);
router.put('/:id', authenticate, requireAdmin, updateLesson);
router.delete('/:id', authenticate, requireAdmin, deleteLesson);

export default router;
