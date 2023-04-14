// routes contain the endpoints for the application 
// controllers contain the implementation code for the endpoints
// models defines data structure and responds to controller requests because controller never interacts with the database 


const Task = require('../models/Task');

const getAllTasks = async function (req, res) {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

const createTask = async function (req, res) {
	// an instance of a model is a document 
	// creates a document 
	try {
		const task = await Task.create(req.body)
		res.status(201).json({ task })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

const getTask = async function (req, res) {
	try {
		const { id } = req.params;
		const task = await Task.findOne({ _id: id })
		if (!task) {
			return res.status(404).json({ msg: `No task with id: ${id}` })
		}
		res.status(200).json({ task })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

const updateTask = async function (req, res) {
	try {
		const { id } = req.params;
		const data = req.body;
		const task = await Task.findOneAndUpdate({ _id: id }, data, { new: true, runValidators: true });
		if (!task) {
			return res.status(404).json({ msg: `No task found with id ${id}` })
		}
		res.status(200).json({ task })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

const deleteTask = async function (req, res) {
	const { id } = req.params;
	try {
		const task = await Task.findOneAndDelete({ _id: id })
		if (!task) {
			return res.status(404).json({ msg: `No task found with id ${id}` })
		}
		res.status(200).json({ task })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };