import React from 'react';
import '../../styles/components/menu-item.scss';
import { Link, withRouter } from 'react-router-dom';

const MenuItem = ({ size, imgUrl, title, linkUrl }) => {
	return (
		<div className={`${size} menu-item`}>
			<div
				className='background-image'
				style={{
					backgroundImage : `url(${imgUrl})`,
					objectFit       : 'contain'
				}}
			/>
			<div className='content'>
				<h1 className='title'>{title}</h1>

				<Link to={`/${linkUrl}`}>
					<span className='subtitle'>shop now</span>
				</Link>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
