import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import '../../styles/components/checkout-item.scss';
import { clearItemFromCart, addItem, removeOne } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item }) => {
	const dispatch = useDispatch();
	return (
		<Table.Row textAlign='center'>
			<Table.Cell>
				<div className='img-container'>
					<img src={item.imageUrl} alt={item.name} />
				</div>
			</Table.Cell>
			<Table.Cell className='name'>{item.name}</Table.Cell>
			<Table.Cell className='quantity'>
				<span className='arrow' onClick={() => dispatch(removeOne(item))}>
					&#10094;
				</span>

				<span className='value'>{item.quantity}</span>

				<span className='arrow' onClick={() => dispatch(addItem(item))}>
					&#10095;
				</span>
			</Table.Cell>
			<Table.Cell className='price'>{item.price}</Table.Cell>
			<Table.Cell className='remove'>
				<Icon name='remove circle' alt='remove item' onClick={() => dispatch(clearItemFromCart(item))} />
			</Table.Cell>
		</Table.Row>
	);
};

export default CheckoutItem;
