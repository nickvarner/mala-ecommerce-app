import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../components/account-component-forms/SignIn';
import '../../styles/pages/signin-register.scss';

const SignInPage = () => {
	return (
		<div className='sign-in page'>
			<h1 className='title'>sign in</h1>
			<small>
				not yet registered? click here to <Link to='/register'>sign up</Link>
			</small>
			<SignIn />
		</div>
	);
};

export default SignInPage;
