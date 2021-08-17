import React from 'react';
import Landing from './pages/Landing';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import ShopPage from './pages/shop-page/ShopPage';
import { Container } from 'semantic-ui-react';
import './styles/App.css';
import SignInPage from './pages/sign-in-and-register-pages/SignInPage';
import RegisterPage from './pages/sign-in-and-register-pages/RegisterPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
	const [ currentUser, setCurrentUser ] = React.useState(null);

	React.useEffect(() => {
		let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id : snapShot.id,
						...snapShot.data()
					});
				});
				console.log(currentUser);
			} else {
				setCurrentUser(userAuth);
				console.log(currentUser);
			}
		});
		return () => {
			unsubscribeFromAuth();
		};
	}, []);
	// React.useEffect(
	// 	() => {
	// 		unsubscribeFromAuth = auth.onAuthStateChanged((user) => setCurrentUser(user));
	// 		return () => {
	// 			unsubscribeFromAuth();
	// 		};
	// 	},
	// 	[ currentUser ]
	// );
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
