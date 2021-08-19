import React from 'react';
import '../../styles/components/cart-dropdown.scss';
import { Button } from 'semantic-ui-react';
import CartItem from '../cart-item/CartItem';
import { useSelector } from 'react-redux';

const CartDropdown = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>{cartItems.map((item) => <CartItem key={item.id} item={item} />)}</div>
			<Button secondary>go to checkout</Button>
		</div>
	);
};

export default CartDropdown;
