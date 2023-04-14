const mongoose = require('mongoose');


// if you want to store a large volume of data or access it at a rate higher than a single server can handle
// you'll need to set up a cluster

// a shared cluster in mongodb is a collection of datasets distributed across many servers
// by using clusters mongodb allows your application to grow as much as it needs to 

const connectDB = function (url) {
	return mongoose
		.connect(url, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: true,
			useUnifiedTopology: true,
		})
}

module.exports = connectDB;


// mongoose
// 	.connect(connectionString, {
// 		useNewUrlParser: true,
// 		useCreateIndex: true, 
// 		useFindAndModify: true, 
// 		useUnifiedTopology: true,
// 	})
	// .then(function () {
	// 	console.log('Connected to the database')
	// })
	// .catch(function (err) {
	// 	console.log(err);
	// })