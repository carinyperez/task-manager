const connectDB = require('./db/connect');

const express = require('express'); 
const app = express(); 

const tasks = require('./routes/tasks');
require('dotenv').config();
const url = process.env.MONGO_URI; 
const notFound = require('./middleware/not-found');
const path = require('path');

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

// middleware 
app.use(express.static('frontend/build'));
app.use(express.json())


// middleware for routes 
app.use('/api/v1/tasks', tasks);

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'))
})

app.use(notFound)




