import React from 'react';
import Landing from './pages/Landing';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import ShopPage from './pages/shop-page/ShopPage';
import { Container } from 'semantic-ui-react';
import './styles/App.css';

function App () {
	return (
		<div>
			<Container>
				<Header />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route path='/shop' component={ShopPage} />
				</Switch>
			</Container>
		</div>
	);
}

export default App;
