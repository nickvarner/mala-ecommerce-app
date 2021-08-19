import React from 'react';
import '../../styles/components/cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../images/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const total = (cartItems) => {
		let sum = 0;
		for (let i = 0; i < cartItems.length; i++) {
			sum += cartItems[i].quantity;
		}
		return sum;
	};
	return (
		<div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{total(cartItems)}</span>
		</div>
	);
};

export default CartIcon;
