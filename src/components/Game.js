import qs from 'qs';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { flipBoardHorizontally } from '../utils';
import Board from './Board/Board';

const Game = ({ location }) => {
	const [game, setGame] = useState(null);
	const [board, setBoard] = useState(null);

	useEffect(() => {
		const query = qs.parse(location.search, {
			ignoreQueryPrefix: true,
			parameterLimit: 1,
		});

		axios
			.get(`/api/game/${query.id}`)
			.then((response) => response.data)
			.then((data) => {
				setGame(data);
				setBoard(flipBoardHorizontally(data.board));
			})
			.catch((error) => console.log(error));
	}, [location.search]);

	return board && <Board board={board} />;
};

export default Game;
