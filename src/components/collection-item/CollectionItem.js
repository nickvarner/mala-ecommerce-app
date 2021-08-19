import React from 'react';
import '../../styles/components/collection-item.scss';
import { Button } from 'semantic-ui-react';

const CollectionItem = (props) => {
	const { imageUrl, name, price } = props.item;
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage : `url(${process.env.PUBLIC_URL + imageUrl})`
				}}
			/>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
				<Button secondary className='collection-button'>
					add to cart
				</Button>
			</div>
		</div>
	);
};

export default CollectionItem;
