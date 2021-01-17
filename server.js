const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

const gameRoute = require('./api/game');

const PORT = process.env.PORT || 8080;
const app = express();

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

app.listen(PORT, () => console.log(`Server now listening on port ${PORT}`));
