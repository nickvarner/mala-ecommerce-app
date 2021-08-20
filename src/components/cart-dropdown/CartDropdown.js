import React from 'react';
import '../../styles/components/cart-dropdown.scss';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ history }) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();
	const checkOut = () => {
		history.push('/checkout');
		dispatch(toggleCartHidden());
	};
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{
					cartItems.length ? cartItems.map((item) => <CartItem key={item.id} item={item} />) :
					<span className='empty-msg'>your cart is empty</span>}
			</div>

			<Button secondary onClick={() => checkOut()}>
				go to checkout
			</Button>
		</div>
	);
};

export default withRouter(CartDropdown);
