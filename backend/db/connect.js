const mongoose = require('mongoose');

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