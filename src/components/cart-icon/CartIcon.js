import React from 'react';
import '../../styles/components/cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../images/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';

const CartIcon = () => {
	const dispatch = useDispatch();

	return (
		<div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};

export default CartIcon;
