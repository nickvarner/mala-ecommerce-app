import React from 'react';
import '../../styles/pages/checkout-page.scss';
import { Table, Divider } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

const CheckoutPage = () => {
	const checkOutItems = useSelector((state) => state.cart.cartItems);
	const total = useSelector((state) => selectCartTotal(state, checkOutItems));

	return (
		<div className='checkout-page'>
			<Table basic='very'>
				<Table.Header className='checkout-header'>
					<Table.Row textAlign='center'>
						<Table.HeaderCell className='header-block'>product</Table.HeaderCell>
						<Table.HeaderCell className='header-block'>description</Table.HeaderCell>
						<Table.HeaderCell className='header-block'>quantity</Table.HeaderCell>
						<Table.HeaderCell className='header-block'>price</Table.HeaderCell>
						<Table.HeaderCell className='header-block'>remove</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{checkOutItems && checkOutItems.map((item) => <CheckoutItem item={item} key={item.id} />)}
				</Table.Body>
			</Table>
			<Divider horizontal />
			<div className='total'>${total}</div>
			<div className='test-warning'>
				please use the following cc info for test payments:
				<br />
				4242 4242 4242 4242 exp: 01/22 ccv: 123
			</div>
			<StripeButton price={total} />
		</div>
	);
};

export default CheckoutPage;
