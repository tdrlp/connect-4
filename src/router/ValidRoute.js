import { Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const ValidRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (
				<Layout>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
};

export default ValidRoute;
