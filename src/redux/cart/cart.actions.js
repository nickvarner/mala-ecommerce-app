import { ADD_ITEM, TOGGLE_CART_HIDDEN, CLEAR_ITEM_FROM_CART, REMOVE_ONE } from '../actions/types';

export const toggleCartHidden = () => ({
	type : TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
	type    : ADD_ITEM,
	payload : item
});

export const clearItemFromCart = (item) => ({
	type    : CLEAR_ITEM_FROM_CART,
	payload : item
});

export const removeOne = (item) => ({
	type    : REMOVE_ONE,
	payload : item
});
