import React from 'react';
import '../../styles/components/cart-dropdown.scss';
import { Dropdown, Button } from 'semantic-ui-react';

// const CartDropdown = () => {
// 	return (
// 		<div className='cart-dropdown'>
// 			<Dropdown>
// 				<Dropdown.Menu>
// 					<div className='cart-items' />
// 					<Dropdown.Divider />
// 					<Dropdown.Item>
// 						<Button secondary>go to checkout</Button>
// 					</Dropdown.Item>
// 				</Dropdown.Menu>
// 			</Dropdown>
// 		</div>
// 	);
// };

const CartDropdown = () => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items' />
			<Button secondary>go to checkout</Button>
		</div>
	);
};

export default CartDropdown;
