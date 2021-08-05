import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/header.scss';
import { ReactComponent as Logo } from '../../images/jewelry.svg';

const Header = () => {
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
			</div>
		</div>
	);
};

export default Header;
