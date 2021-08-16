import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import '../../styles/components/form-styles.scss';

const Register = () => {
	const [ state, setState ] = React.useState({
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
	const [ passMatch, setPassMatch ] = React.useState(true);
	const handleSubmit = (e) => {
		e.preventDefault();
		passwordMatch(state.password, state.passwordConfirm);
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
				<Button primary>sign up</Button>
				<Button secondary>sign in with google</Button>
			</Form>
		</div>
	);
};

export default Register;
