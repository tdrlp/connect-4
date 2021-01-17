const mongoose = require('mongoose');

const models = { Game: require('./models/Game') };

const connectDB = () =>
	mongoose.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoIndex: false,
	});

exports.models = models;
exports.connectDB = connectDB;
