const mongoose = require('mongoose');

// {name: string, completed: boolean}

// a mongoose schema defines the structure of the document, default values, validators, etc
// a mongoose model provides an interface to the database for creating, querying, updating
// a mongoose model is a wrapper on the mongoose schema
// an instance of a model is called a document 
// mvc, model view controller is an architecture pattern 

// schema validation, validate data before we send it into the database

// only the properties that you define on your schema will be passed on to the database
const TaskSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: [true, 'must provide name'],
		trim: true,
		maxlength: [20, 'name can not be more than 20 characters']
	},
	completed: {
		type: Boolean, 
		default: false
	}
})

module.exports = mongoose.model('Task', TaskSchema);