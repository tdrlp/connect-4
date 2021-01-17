require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db').connectDB;

const gameRoute = require('./api/game');

const PORT = process.env.PORT || 8080;
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
	pingInterval: 10000,
	pingTimeout: 5000,
	cookie: false,
});

require('./socket')(io);

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

// ROTUES
app.use('/api/game', gameRoute);

// render the react build directory
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

connectDB()
	.then(async () => {
		server.listen(PORT, () =>
			console.log(`Server now listening on port ${PORT}`)
		);
	})
	.catch((err) => {
		console.log(err);
	});
