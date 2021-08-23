import React from 'react';
import '../../styles/components/menu-item.scss';
import { Link, withRouter } from 'react-router-dom';

const MenuItem = ({ size, imgUrl, title, linkUrl, history, match }) => {
	console.log(`${match.url}${linkUrl}`);
	return (
		<div className={`${size} menu-item`} onClick={() => history.push(`${linkUrl}`)}>
			<div
				className='background-image'
				style={{
					backgroundImage : `url(${imgUrl})`,
					objectFit       : 'contain'
				}}
			/>
			<div className='content'>
				<h1 className='title'>{title}</h1>

				<span className='subtitle'>shop now</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
