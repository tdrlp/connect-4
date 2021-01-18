const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
	_id: { type: String },
	team: { type: Boolean },
	joinedGameAt: Date,
});

exports.playerSchema = playerSchema;
exports.Player = mongoose.model('Player', playerSchema);
