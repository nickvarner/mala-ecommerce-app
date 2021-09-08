import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51JRkgJGJzuhmDeDIV69diaDyc5dPoQujLyrXbIHgzDLVuYXu1HPNUma2FSQACGHqWUvTslNZDycc0vUBk3lfEhco00kShN0fJR';
	const onToken = (token) => {
		console.log(token);
		alert('payment successful');
	};
	return (
		<StripeCheckout
			label='pay now'
			name='rosewood malas'
			billingAddress
			shippingAddress
			description={`your total is $${price}`}
			amount={priceForStripe}
			panelLabel='pay now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
