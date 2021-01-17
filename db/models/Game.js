const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const modelName = 'Game';

const gameSchema = new mongoose.Schema(
	{
		_id: { type: String, default: () => uuidv4() },
		owner: { type: String, required: true },
		opponent: { type: String },
		rounds: [{ column: Number }],
		isFinished: Boolean,
	},
	{ timestamps: true }
);

module.exports = mongoose.model(modelName, gameSchema);
