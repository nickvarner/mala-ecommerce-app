import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import '../../styles/components/checkout-item.scss';

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
				<Icon name='minus' />
				{item.quantity}
				<Icon name='add' />
			</Table.Cell>
			<Table.Cell className='price'>{item.price}</Table.Cell>
			<Table.Cell className='remove'>
				<Icon name='remove circle' alt='remove item' />
			</Table.Cell>
		</Table.Row>
	);
};

export default CheckoutItem;
