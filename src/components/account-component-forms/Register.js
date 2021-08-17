import React from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import '../../styles/components/form-styles.scss';

import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils';

const Register = ({ currentUser }) => {
	const [ state, setState ] = React.useState({
		displayName     : '',
		email           : '',
		password        : '',
		passwordConfirm : ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name] : value
		});
	};
	const [ passMatch, setPassMatch ] = React.useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password } = state;
		passwordMatch(state.password, state.passwordConfirm);
		if (passMatch) {
			try {
				const { user } = await auth.createUserWithEmailAndPassword(email, password);
				await createUserProfileDocument(user, { displayName });
				setState({
					displayName     : '',
					email           : '',
					password        : '',
					passwordConfirm : ''
				});
			} catch (err) {
				console.error(err.message);
			}
			console.log(state);
		} else {
			return;
		}
	};

	const passwordMatch = (pass1, pass2) => {
		if (pass1 === pass2) {
			return setPassMatch(true);
		} else {
			return setPassMatch(false);
		}
	};

	return (
		<div className='register group'>
			<Form onSubmit={(e) => handleSubmit(e)}>
				<Form.Input
					className='form-input'
					required
					label='display name'
					placeholder='display name'
					type='displayName'
					id='displayName'
					name='displayName'
					autoComplete='displayName'
					onChange={(e) => handleChange(e)}
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
					autoComplete='new-password'
					onChange={(e) => handleChange(e)}
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
						onChange={(e) => handleChange(e)}
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
						onChange={(e) => handleChange(e)}
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
