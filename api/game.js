const express = require('express');
const Game = require('../db/models/Game').Game;
const router = express.Router();

/*
 * GET - route to get a game by id
 */
router.get('/:id', async (req, res) => {
	try {
		const game = await Game.findOne({ _id: req.params.id });
		if (!game) {
			throw new Error();
		}

		res.send(game);
	} catch {
		res.status(404);
		res.send({ error: 'Game does not exist.' });
	}
});

/*
 * PATCH - route to update a game by id
 */
router.patch('/:id', async (req, res) => {
	try {
		const game = await Game.findOne({ _id: req.params.id });

		// do update stuff here

		await game.save();
		res.send(game);
	} catch {
		res.status(404);
		res.send({ error: 'Game does not exist.' });
	}
});

/*
 * POST - route to create a new game
 */
router.post('/new', async (req, res) => {
	try {
		const game = new Game();
		await game.save();
		res.send(game);
	} catch {
		res.status(500);
		res.send({ error: 'An error occurred while creating the game.' });
	}
});

module.exports = router;
