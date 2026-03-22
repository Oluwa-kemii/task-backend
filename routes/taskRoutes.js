const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  toggleComplete,
  deleteTask
} = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getTasks);
router.get('/:id', protect, getTaskById);
router.post('/', protect, createTask);
router.put('/:id', protect, updateTask);
router.patch('/:id/complete', protect, toggleComplete);
router.delete('/:id', protect, deleteTask);

module.exports = router;