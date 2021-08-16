import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../../components/account-component-forms/Register';
import '../../styles/pages/signin-register.scss';

const RegisterPage = () => {
	return (
		<div className='register page'>
			<h1 className='title'>register</h1>
			<small>
				already signed up? <Link to='/signin'>click here</Link>
			</small>
			<Register />
		</div>
	);
};

export default RegisterPage;
