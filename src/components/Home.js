import { Button } from '@geist-ui/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
	const history = useHistory();

	const handleGameCreation = () => {
		axios
			.post('/api/game/new')
			.then((response) => response.data)
			.then((data) => history.push(`/game?id=${data._id}`))
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
