const connectDB = require('./db/connect');

const express = require('express'); 
const app = express(); 

const port = 3000; 
const tasks = require('./routes/tasks');
require('dotenv').config();
const url = process.env.MONGO_URI; 

// connect to database and if successful start server 
const start = async function() {
	try {
		// this will throw an error if not successful
		await connectDB(url);
		app.listen(port,console.log(`Server listening to port ${port}`));
	} catch (error) {
		console.log(error)
	}
}

start();

// middleware
// in javascript you can serialize an object to a JSON string by calling the function JSON.stringify() 
// and deserialize using JSON.parse(), express.json parses json into an object 
// serve static assets 
app.use(express.static('./public'))
app.use(express.json())


app.get('/hello', function(req, res) {
	res.send('Task manager app')
})

// middleware for routes 
app.use('/api/v1/tasks', tasks);




