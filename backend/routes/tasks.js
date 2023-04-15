const express = require('express');

const router = express.Router(); 
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks');

// @route /api/v1/tasks
// @desc Get all the tasks
// @access Public 
router.get('/', getAllTasks);

// @route /api/v1/tasks
// @desc Create a new task 
// @access Public 
router.post('/', createTask);

// @route /api/v1/tasks/:id
// @desc Get single task by id 
// @access Public 
router.get('/:id', getTask);

// @route /api/v1/tasks/:id 
// @desc Update task 
// @access Public 
router.patch('/:id', updateTask);

// @route /api/v1/tasks/:id
// @desc Delete task by id 
// @access Public
router.delete('/:id', deleteTask);

module.exports = router; 
