import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/header.scss';
import { ReactComponent as Logo } from '../../images/jewelry.svg';
import { auth } from '../../firebase/firebase.utils';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Header = () => {
	const currentUser = useSelector((state) => state.user.currentUser);
	const hidden = useSelector((state) => state.cart.hidden);
	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link to='/shop' className='option'>
					shop
				</Link>
				<Link to='/shop' className='option'>
					contact
				</Link>
				{
					currentUser ? <div className='option' onClick={() => auth.signOut()}>
						sign out
					</div> :
					<Link to='/signin' className='option'>
						sign in
					</Link>}
				<CartIcon />
				{hidden && <CartDropdown />}
			</div>
		</div>
	);
};

export default Header;
