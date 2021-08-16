import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import '../../styles/components/form-styles.scss';

const SignIn = () => {
	const [ state, setState ] = React.useState({
		email    : '',
		password : ''
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
				<Button primary>sign in</Button>
				<Button secondary>sign in with google</Button>
			</Form>
		</div>
	);
};

export default SignIn;
