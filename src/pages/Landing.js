import React from 'react';
import '../styles/pages/landing.styles.scss';
import { Container } from 'semantic-ui-react';
import Directory from '../components/directory/Directory';

function Landing () {
	return (
		<Container>
			<div className='Landing'>
				<Directory />
			</div>
		</Container>
	);
}

export default Landing;
