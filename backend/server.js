const connectDB = require('./db/connect');

const express = require('express'); 
const app = express(); 

const tasks = require('./routes/tasks');
require('dotenv').config();
const url = process.env.MONGO_URI; 

const start = async function() {
	try {
		await connectDB(url);
		app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
			console.log("Server is running.");
		  });
		
	} catch (error) {
		console.log(error)
	}
}

start();

app.use(express.static('./public'));
app.use(express.json())


app.get('/hello', function(req, res) {
	res.status(200).json({msg: 'Task manager app'})
})

// middleware for routes 
app.use('/api/v1/tasks', tasks);




