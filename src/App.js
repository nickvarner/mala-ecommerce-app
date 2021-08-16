import React from 'react';
import Landing from './pages/Landing';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import ShopPage from './pages/shop-page/ShopPage';
import { Container } from 'semantic-ui-react';
import './styles/App.css';
import SignInPage from './pages/sign-in-and-register-pages/SignInPage';
import RegisterPage from './pages/sign-in-and-register-pages/RegisterPage';
import { auth } from './firebase/firebase.utils';

const App = () => {
	const [ currentUser, setCurrentUser ] = React.useState(null);
	let unsubscribeFromAuth = null;
	React.useEffect(
		() => {
			unsubscribeFromAuth = auth.onAuthStateChanged((user) => setCurrentUser(user));
			return () => {
				unsubscribeFromAuth();
			};
		},
		[ currentUser ]
	);
	return (
		<div>
			<Container>
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/signin' component={SignInPage} />
					<Route exact path='/register' component={RegisterPage} />
					<Route path='/shop' component={ShopPage} />
				</Switch>
			</Container>
		</div>
	);
};

// export default App

export default App;
