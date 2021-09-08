import React from 'react';
import { ReactComponent as Logo } from '../../images/jewelry.svg';
import { auth } from '../../firebase/firebase.utils';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = () => {
	const currentUser = useSelector((state) => state.user.currentUser);
	const hidden = useSelector((state) => state.cart.hidden);
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>shop</OptionLink>
				<OptionLink to='/shop'>contact</OptionLink>
				{
					currentUser ? <OptionDiv onClick={() => auth.signOut()}>sign out</OptionDiv> :
					<OptionLink to='/signin'>sign in</OptionLink>}
				<CartIcon />
				{hidden && <CartDropdown />}
			</OptionsContainer>
		</HeaderContainer>
	);
};

export default Header;
