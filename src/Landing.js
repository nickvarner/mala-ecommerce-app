import React from 'react';
import './styles/landing.styles.scss';

function Landing () {
	return (
		<div className='Landing'>
			<div className='directory-menu'>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>bracelets</h1>
						<span className='subtitle'>shop now</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>strands</h1>
						<span className='subtitle'>shop now</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>rings</h1>
						<span className='subtitle'>shop now</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>necklaces</h1>
						<span className='subtitle'>shop now</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>custom mala</h1>
						<span className='subtitle'>shop now</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
