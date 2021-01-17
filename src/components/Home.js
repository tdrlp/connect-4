import { Button } from '@geist-ui/react';
import axios from 'axios';
// import useSocket from '../hooks/useSocket';

const Home = ({ query }) => {
	// const socket = useSocket('message', (message) => {
	// 	console.log(message);
	// });

	// useSocket('room.full', () => {
	// 	console.log('room you attempted to join is full');
	// });

	// if (query && query.id) {
	// 	socket.emit('room.connect', query.id);
	// }

	const handleGameCreation = () => {
		axios
			.post('/api/game/new')
			.then((response) => {
				console.log(response);
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<Button shadow type="secondary" onClick={handleGameCreation}>
				create new game
			</Button>
		</>
	);
};

export default Home;
