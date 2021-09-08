import React from 'react';
import { Container } from 'semantic-ui-react';
import Directory from '../../components/directory/Directory';

import { LandingContainer } from './landing.styles';

function Landing () {
	return (
		<Container>
			<LandingContainer>
				<Directory />
			</LandingContainer>
		</Container>
	);
}

export default Landing;
