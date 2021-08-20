import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';

import './styles/App.css';

import SignInPage from './pages/sign-in-and-register-pages/SignInPage';
import RegisterPage from './pages/sign-in-and-register-pages/RegisterPage';
import Landing from './pages/Landing';
import Header from './components/header/Header';
import ShopPage from './pages/shop-page/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';

const App = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.user.currentUser);
	React.useEffect(
		() => {
			let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
				if (userAuth) {
					const userRef = await createUserProfileDocument(userAuth);

					userRef.onSnapshot((snapShot) => {
						dispatch(
							setCurrentUser({
								id : snapShot.id,
								...snapShot.data()
							})
						);
					});
				} else {
					dispatch(setCurrentUser(userAuth));
				}
			});
			return () => {
				unsubscribeFromAuth();
			};
		},
		[ dispatch ]
	);

	return (
		<div>
			<Container>
				<Header />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/signin'
						render={() =>

								currentUser ? <Redirect to='/' /> :
								<SignInPage />}
					/>
					<Route
						exact
						path='/register'
						render={() =>

								currentUser ? <Redirect to='/' /> :
								<RegisterPage />}
					/>
					<Route path='/shop' component={ShopPage} />
				</Switch>
			</Container>
		</div>
	);
};

export default App;
