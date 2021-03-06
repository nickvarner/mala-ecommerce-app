import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ONE } from '../actions/types';
import { addItemToCart, removeOneFromCart } from './cart.utils';

const INITIAL_STATE = {
	hidden    : true,
	cartItems : []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden : !state.hidden
			};
		case ADD_ITEM:
			return {
				...state,
				cartItems : addItemToCart(state.cartItems, action.payload)
			};
		case REMOVE_ONE:
			return {
				...state,
				cartItems : removeOneFromCart(state.cartItems, action.payload)
			};
		case CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems : state.cartItems.filter((item) => item.id !== action.payload.id)
			};
		default:
			return state;
	}
};

export default cartReducer;
