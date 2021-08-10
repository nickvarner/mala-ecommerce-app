import React from 'react';
import '../../styles/components/collection-item.scss';
import { Card, Icon, Image } from 'semantic-ui-react';

const CollectionItem = (props) => {
	const { imageUrl, name, price } = props.item;
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage : `url(${process.env.PUBLIC_URL + imageUrl})`
				}}>
				<div className='collection-footer'>
					<span className='name'>{name}</span>
					<span className='price'>{price}</span>
				</div>
			</div>
		</div>
	);
};

export default CollectionItem;
