const users = [];
const rooms = [];

module.exports = (io) => {
	io.on('connection', (socket) => {
		users.push(socket.id);
		console.log(users);

		socket.on('room.connect', (id) => {
			console.log(`connection request: ${id}`);
			const index = rooms.findIndex((room) => room.id === id);
			if (index > -1) {
				if (rooms[index].users.length > 1) {
					io.to(socket.id).emit('room.full');
					console.log('room full');
				} else {
					rooms[index].users.push(socket.id);
				}
			} else {
				rooms.push({ id, users: [socket.id] });
			}

			console.log(rooms);
		});

		socket.on('message', (message) => {
			console.log(message);
			io.emit('message', message);
		});

		socket.on('disconnect', () => {
			console.log('user disconnected');
			const index = users.indexOf(socket.id);
			if (index > -1) users.splice(index, 1);
		});
	});
};
