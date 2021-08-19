import React from 'react';
import '../../styles/components/collection-item.scss';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item }) => {
	const dispatch = useDispatch();
	const { imageUrl, name, price } = item;
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
				<Button secondary className='collection-button' onClick={() => dispatch(addItem(item))}>
					add to cart
				</Button>
			</div>
		</div>
	);
};

export default CollectionItem;
