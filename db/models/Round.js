const mongoose = require('mongoose');

const roundSchema = new mongoose.Schema({
	column: {
		type: Number,
		min: [0, 'Column selected out of range!'],
		max: [6, 'Column selected out of range!'],
		required: [true, 'Column selection missing.'],
	},
	createdAt: Date,
});

exports.roundSchema = roundSchema;
exports.Round = mongoose.model('Round', roundSchema);
