const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// sub-document schemas
const roundSchema = require('./Round').roundSchema;
const playerSchema = require('./Player').playerSchema;

const generateBoard = () => {
	const cols = 7;
	const rows = 6;

	return Array.from(Array(cols), () => new Array(rows));
};

const gameSchema = new mongoose.Schema(
	{
		_id: { type: String, default: uuidv4 },
		players: {
			type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
			validate: [
				(players) => players.length <= 2,
				'Player limit for the game reached.',
			],
		},
		rounds: [roundSchema],
		board: { type: [], default: generateBoard },
	},
	{ timestamps: true }
);

exports.gameSchema = gameSchema;
exports.Game = mongoose.model('Game', gameSchema);
