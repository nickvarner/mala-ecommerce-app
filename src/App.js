import React from 'react';
import Landing from './pages/Landing';
import { Route, Switch } from 'react-router-dom';
import Bracelets from './pages/Bracelets';

function App () {
	return (
		<div>
			<Switch>
				<Landing />
				<Route exact path='/bracelets' component={Bracelets} />
			</Switch>
		</div>
	);
}

export default App;
