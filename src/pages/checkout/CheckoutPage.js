import React from 'react';
import '../../styles/pages/checkout-page.scss';
import { Table, Divider } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const CheckoutPage = () => {
	const checkOutItems = useSelector((state) => state.cart.cartItems);
	const total = useSelector((state) => selectCartTotal(state, checkOutItems));

	return (
		<div className='checkout-page'>
			<Table basic='very'>
				<Table.Header className='checkout-header'>
					<Table.Row textAlign='center'>
						<Table.HeaderCell className='header-block'>Product</Table.HeaderCell>
						<Table.HeaderCell className='header-block'>Description</Table.HeaderCell>
						<Table.HeaderCell className='header-block'>Quantity</Table.HeaderCell>
						<Table.HeaderCell className='header-block'>Price</Table.HeaderCell>
						<Table.HeaderCell className='header-block'>Remove</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>{checkOutItems && checkOutItems.map((item) => <CheckoutItem item={item} />)}</Table.Body>
			</Table>
			<Divider horizontal />
			<div className='total'>${total}</div>
		</div>
	);
};

export default CheckoutPage;
