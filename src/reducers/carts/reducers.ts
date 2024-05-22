import { produce } from "immer";
import type { CartItems, Order } from "../../context/CartContext";
import { ActionTypes, type Actions } from "./actions";

export interface CartState {
	cart: CartItems[];
	order: Order[];
}

export function cartReducers(state: CartState, action: Actions) {
	switch (action.type) {
		case ActionTypes.ADD_ITEM: {
			const { product } = action.payload;

			return produce(state, (draft) => {
				draft.cart.push(product);
			});
		}

		case ActionTypes.REMOVE_ITEM:
			return produce(state, (draft) => {
				const itemToRemoveId = draft.cart.findIndex(
					(item) => item.id === action.payload.productId,
				);
				draft.cart.splice(itemToRemoveId, 1);
			});

		case ActionTypes.INCREMENT_ITEM_QUANTITY: {
			const { productId, quantity } = action.payload;

			return produce(state, (draft) => {
				const itemToIncrement = draft.cart.findIndex(
					(cartItem) => cartItem.id === productId,
				);

				if (itemToIncrement < 0) return;

				draft.cart[itemToIncrement].quantity = quantity;
			});
		}

		case ActionTypes.DECREMENT_ITEM_QUANTITY: {
			const { productId, quantity } = action.payload;

			return produce(state, (draft) => {
				const itemToDecrement = draft.cart.findIndex(
					(cartItem) => cartItem.id === productId,
				);

				if (itemToDecrement < 0) return;

				const isTheLastItem = draft.cart[itemToDecrement].quantity <= 1;

				if (isTheLastItem) return;

				draft.cart[itemToDecrement].quantity = quantity;
			});
		}

		case ActionTypes.CLEAR_CART: {
			const { shippingDetails } = action.payload;

			return produce(state, (draft) => {
				const newOrder = {
					id: new Date().getTime().toString(),
					shipping: shippingDetails,
					items: state.cart,
				};

				draft.order.push(newOrder);
				draft.cart = [];

				action.payload.callback(`/order/${newOrder.id}/success`);
			});
		}
		default:
			return state;
	}
}
