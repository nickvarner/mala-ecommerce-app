import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/header.scss';
import { ReactComponent as Logo } from '../../images/jewelry.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
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
			</div>
		</div>
	);
};

export default Header;
