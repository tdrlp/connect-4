import Header from './Header';
import Footer from './Footer';
import { Page } from '@geist-ui/react';

const { Content } = Page;

const Layout = ({ children }) => {
	return (
		<>
			<Page size="large">
				<Header />
				<Content>{children}</Content>
				<Footer />
			</Page>
		</>
	);
};

export default Layout;
