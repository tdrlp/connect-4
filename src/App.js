import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import ValidRoute from './router/ValidRoute';

const PageNotFound = () => {
	return <div>404 Page Not Found!</div>;
};

const App = () => {
	return (
		<Router>
			<Switch>
				<ValidRoute path="/" exact component={Home} />
				<ValidRoute path="/game" exact component={Game} />
				<Route path="*" component={PageNotFound} />
			</Switch>
		</Router>
	);
};

export default App;
