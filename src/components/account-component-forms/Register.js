import React from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import '../../styles/components/form-styles.scss';

import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils';

const Register = ({ currentUser }) => {
	const [ passMatch, setPassMatch ] = React.useState(true);
	const [ userCredentials, setUserCredentials ] = React.useState({
		displayName     : '',
		email           : '',
		password        : '',
		passwordConfirm : ''
	});

	const { displayName, email, password, passwordConfirm } = userCredentials;

	const passwordMatch = (pass1, pass2) => {
		if (pass1 === pass2) {
			return setPassMatch(true);
		} else {
			return setPassMatch(false);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		passwordMatch(password, passwordConfirm);
		setUserCredentials({
			...userCredentials,
			[name] : value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		passwordMatch(password, passwordConfirm);
		if (passMatch) {
			try {
				const { user } = await auth.createUserWithEmailAndPassword(email, password);
				await createUserProfileDocument(user, { displayName });
				setUserCredentials({
					displayName     : '',
					email           : '',
					password        : '',
					passwordConfirm : ''
				});
			} catch (err) {
				console.error(err.message);
			}
		} else {
			return;
		}
	};

	return (
		<div className='register group'>
			<Form onSubmit={handleSubmit}>
				<Form.Input
					className='form-input'
					required
					label='display name'
					placeholder='display name'
					type='displayName'
					id='displayName'
					name='displayName'
					autoComplete='displayName'
					onChange={handleChange}
				/>
				<Form.Input
					className='form-input'
					required
					label='email'
					placeholder='email'
					type='email'
					id='email'
					name='email'
					autoComplete='username'
					onChange={handleChange}
				/>
				<Form.Input
					className='form-input'
					required
					label='password'
					placeholder='password'
					type='password'
					id='password'
					name='password'
					autoComplete='new-password'
					onChange={handleChange}
				/>
				{
					passMatch ? <Form.Input
						className='form-input'
						required
						label='confirm password'
						placeholder='confirm password'
						type='password'
						id='passwordConfirm'
						name='passwordConfirm'
						autoComplete='new-password'
						onChange={handleChange}
					/> :
					<Form.Input
						className='form-input'
						required
						label='confirm password'
						placeholder='confirm password'
						type='password'
						id='passwordConfirm'
						name='passwordConfirm'
						autoComplete='new-password'
						error={{ content: 'your passwords must match', pointing: 'below' }}
						onChange={handleChange}
					/>}
				<div className='buttons'>
					<Button primary type='submit'>
						sign up
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

export default Register;
