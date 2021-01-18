module.exports = (io) => {
	io.on('connection', (socket) => {
		/*
		 * 1. socket connected therefore add player to db
		 */

		socket.on('game.connect', (gameID) => {
			/*
			Players and games are detached until a message is sent with the gameID. Once the message is received here
			the game and player can be attached therefore connecting the player to the game.
			 * 1. query db for game with this id
			 * 2. attach player to game
			 * 3. save the new game model
			 * 4. create a socket room with the gameID by joining this socket to it
			 */
		});

		socket.on('game.move', ({ gameID, column }) => {
			/*
			When a move message is received, it needs to contain 2 things: the game ID which is used to retrieve
			the game and a column which is the column the user clicked
			 * 1. query db for game with the id included
			 * 2. validate the the move is allowed
			 * 3. create a new round model
			 * 4. attach the new round model to the game
			 * 5. update the board of the game with the move
			 * 6. save the new game state to the db
			 * 7. emit the new game state to all players
			 */
		});

		socket.on('disconnect', () => {
			/*
			If a player disconnects, there will be no way to reconnect therefore the game is considered over.
			When a game is over all game details need to be deleted.
			 * 1. query for game that contained the player with this socket id
			 * 2. delete players attached to game
			 * 3. delete rounds attached to game
			 * 4. delete game
			 */
		});
	});
};
