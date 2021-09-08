import React from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import '../../styles/components/form-styles.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
	const [ userCredentials, setCredentials ] = React.useState({
		email    : '',
		password : ''
	});

	const handleChange = (e) => {
		setCredentials({
			...userCredentials,
			[e.target.name]: e.target.value
		});
	};
	const { email, password } = userCredentials;
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setCredentials({
				email    : '',
				password : ''
			});
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className='signin group'>
			<Form onSubmit={(e) => handleSubmit(e)}>
				<Form.Input
					className='form-input'
					required
					label='email'
					placeholder='email'
					type='email'
					id='email'
					name='email'
					autoComplete='username'
					onChange={(e) => handleChange(e)}
				/>
				<Form.Input
					className='form-input'
					required
					label='password'
					placeholder='password'
					type='password'
					id='password'
					name='password'
					autoComplete='password'
					onChange={(e) => handleChange(e)}
				/>
				<div className='buttons'>
					<Button primary type='submit'>
						sign in
					</Button>
					<Button secondary onClick={signInWithGoogle}>
						<Icon name='google' />
						sign in with google
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default SignIn;
